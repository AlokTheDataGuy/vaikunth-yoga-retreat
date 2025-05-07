const Booking = require('../models/Booking');
const Program = require('../models/Program');
const Accommodation = require('../models/Accommodation');

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private (Admin)
exports.getAllBookings = async (req, res) => {
  try {
    // Build query
    const query = {};

    // Filter by status
    if (req.query.status) {
      query.status = req.query.status;
    }

    // Filter by program
    if (req.query.program) {
      query.program = req.query.program;
    }

    // Filter by date range
    if (req.query.startDate) {
      query.startDate = { $gte: new Date(req.query.startDate) };
    }

    if (req.query.endDate) {
      query.endDate = { $lte: new Date(req.query.endDate) };
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Booking.countDocuments(query);

    // Get bookings
    const bookings = await Booking.find(query)
      .populate('user', 'name email phone')
      .populate('program', 'title startDate endDate')
      .populate('accommodation', 'name type')
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: bookings.length,
      pagination,
      total,
      data: bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get user bookings
// @route   GET /api/bookings/me
// @access  Private
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('program', 'title startDate endDate image')
      .populate('accommodation', 'name type')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch your bookings',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('user', 'name email phone')
      .populate('program', 'title description startDate endDate image')
      .populate('accommodation', 'name type pricePerNight images');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if the booking belongs to the user or if the user is an admin
    if (booking.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this booking'
      });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res) => {
  try {
    // Set user to current user
    req.body.user = req.user.id;

    // Check if program exists and has availability
    const program = await Program.findById(req.body.program);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    // Check if accommodation exists and has availability
    const accommodation = await Accommodation.findById(req.body.accommodation);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    if (accommodation.availableUnits < 1) {
      return res.status(400).json({
        success: false,
        message: 'Selected accommodation is not available'
      });
    }

    // Calculate total amount
    const programDuration = Math.ceil((new Date(program.endDate) - new Date(program.startDate)) / (1000 * 60 * 60 * 24));
    const totalAmount = accommodation.pricePerNight * programDuration;

    // Create booking
    const booking = await Booking.create({
      ...req.body,
      totalAmount,
      startDate: program.startDate,
      endDate: program.endDate
    });

    // Update accommodation availability
    await Accommodation.findByIdAndUpdate(
      req.body.accommodation,
      { $inc: { availableUnits: -1 } }
    );

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create booking',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Update booking
// @route   PUT /api/bookings/:id
// @access  Private (Admin)
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // If status is being changed to cancelled, update accommodation availability
    if (req.body.status === 'cancelled' && booking.status !== 'cancelled') {
      await Accommodation.findByIdAndUpdate(
        booking.accommodation,
        { $inc: { availableUnits: 1 } }
      );
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
      .populate('user', 'name email phone')
      .populate('program', 'title startDate endDate')
      .populate('accommodation', 'name type');

    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: updatedBooking
    });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update booking',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Cancel booking
// @route   PUT /api/bookings/:id/cancel
// @access  Private
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if the booking belongs to the user or if the user is an admin
    if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to cancel this booking'
      });
    }

    // Check if booking is already cancelled
    if (booking.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Booking is already cancelled'
      });
    }

    // Update booking status and cancellation reason
    booking.status = 'cancelled';
    booking.cancellationReason = req.body.cancellationReason || 'Cancelled by user';
    await booking.save();

    // Update accommodation availability
    await Accommodation.findByIdAndUpdate(
      booking.accommodation,
      { $inc: { availableUnits: 1 } }
    );

    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully',
      data: booking
    });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to cancel booking',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Check availability
// @route   GET /api/bookings/availability
// @access  Public
exports.checkAvailability = async (req, res) => {
  try {
    const { programId, startDate, endDate, guests } = req.query;

    // Check if program exists
    const program = await Program.findById(programId);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    // Get available accommodations
    const accommodations = await Accommodation.find({
      availableUnits: { $gt: 0 },
      capacity: { $gte: parseInt(guests) || 1 }
    }).sort({ pricePerNight: 1 });

    res.status(200).json({
      success: true,
      count: accommodations.length,
      data: accommodations
    });
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check availability',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get upcoming programs with availability
// @route   GET /api/bookings/upcoming-programs
// @access  Public
exports.getUpcomingPrograms = async (req, res) => {
  try {
    const currentDate = new Date();

    // Get upcoming programs
    const upcomingPrograms = await Program.find({
      startDate: { $gt: currentDate }
    })
    .sort({ startDate: 1 })
    .limit(10);

    // Check availability for each program
    const programsWithAvailability = await Promise.all(
      upcomingPrograms.map(async (program) => {
        const availableAccommodations = await Accommodation.find({
          availableUnits: { $gt: 0 }
        }).countDocuments();

        return {
          ...program.toObject(),
          hasAvailability: availableAccommodations > 0
        };
      })
    );

    res.status(200).json({
      success: true,
      count: programsWithAvailability.length,
      data: programsWithAvailability
    });
  } catch (error) {
    console.error('Error fetching upcoming programs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch upcoming programs',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};