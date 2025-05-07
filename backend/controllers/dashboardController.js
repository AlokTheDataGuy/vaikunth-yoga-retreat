const User = require('../models/User');
const Booking = require('../models/Booking');
const Program = require('../models/Program');
const Accommodation = require('../models/Accommodation');

// @desc    Get user dashboard data
// @route   GET /api/dashboard
// @access  Private
exports.getDashboardData = async (req, res) => {
  try {
    // Get user profile
    const user = await User.findById(req.user.id);

    // Get user's bookings
    const bookings = await Booking.find({ user: req.user.id })
      .populate('program', 'title startDate endDate image')
      .populate('accommodation', 'name type')
      .sort({ startDate: 1 });

    // Separate upcoming and past bookings
    const currentDate = new Date();
    const upcomingBookings = bookings.filter(booking => new Date(booking.startDate) > currentDate);
    const pastBookings = bookings.filter(booking => new Date(booking.startDate) <= currentDate);

    // Get booking statistics
    const totalBookings = bookings.length;
    const confirmedBookings = bookings.filter(booking => booking.status === 'confirmed').length;
    const cancelledBookings = bookings.filter(booking => booking.status === 'cancelled').length;
    const completedBookings = bookings.filter(booking => booking.status === 'completed').length;

    // Get total amount spent
    const totalSpent = bookings.reduce((total, booking) => {
      if (booking.status !== 'cancelled') {
        return total + booking.totalAmount;
      }
      return total;
    }, 0);

    // Get recommended programs (in a real app, this would be based on user preferences)
    const recommendedPrograms = await Program.find()
      .sort({ startDate: 1 })
      .limit(3);

    res.status(200).json({
      success: true,
      data: {
        user,
        bookings: {
          upcoming: upcomingBookings,
          past: pastBookings,
          total: totalBookings,
          confirmed: confirmedBookings,
          cancelled: cancelledBookings,
          completed: completedBookings
        },
        financials: {
          totalSpent
        },
        recommendations: recommendedPrograms
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get user booking statistics
// @route   GET /api/dashboard/booking-stats
// @access  Private
exports.getBookingStats = async (req, res) => {
  try {
    // Get all user bookings
    const bookings = await Booking.find({ user: req.user.id });

    // Calculate statistics
    const totalBookings = bookings.length;
    
    // Status counts
    const statusCounts = {
      pending: 0,
      confirmed: 0,
      cancelled: 0,
      completed: 0
    };

    bookings.forEach(booking => {
      statusCounts[booking.status]++;
    });

    // Calculate monthly booking counts for the past year
    const monthlyBookings = Array(12).fill(0);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    bookings.forEach(booking => {
      const bookingDate = new Date(booking.createdAt);
      if (bookingDate.getFullYear() === currentYear) {
        monthlyBookings[bookingDate.getMonth()]++;
      }
    });

    res.status(200).json({
      success: true,
      data: {
        totalBookings,
        statusCounts,
        monthlyBookings
      }
    });
  } catch (error) {
    console.error('Error fetching booking statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking statistics',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get user financial summary
// @route   GET /api/dashboard/financial-summary
// @access  Private
exports.getFinancialSummary = async (req, res) => {
  try {
    // Get all user bookings
    const bookings = await Booking.find({ user: req.user.id });

    // Calculate total spent
    const totalSpent = bookings.reduce((total, booking) => {
      if (booking.status !== 'cancelled') {
        return total + booking.totalAmount;
      }
      return total;
    }, 0);

    // Calculate spending by program type
    const programSpending = {};
    
    for (const booking of bookings) {
      if (booking.status !== 'cancelled') {
        const program = await Program.findById(booking.program);
        if (program) {
          if (!programSpending[program.category]) {
            programSpending[program.category] = 0;
          }
          programSpending[program.category] += booking.totalAmount;
        }
      }
    }

    // Calculate spending by month for the current year
    const monthlySpending = Array(12).fill(0);
    const currentYear = new Date().getFullYear();
    
    bookings.forEach(booking => {
      const bookingDate = new Date(booking.createdAt);
      if (bookingDate.getFullYear() === currentYear && booking.status !== 'cancelled') {
        monthlySpending[bookingDate.getMonth()] += booking.totalAmount;
      }
    });

    res.status(200).json({
      success: true,
      data: {
        totalSpent,
        programSpending,
        monthlySpending
      }
    });
  } catch (error) {
    console.error('Error fetching financial summary:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch financial summary',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get user activity feed
// @route   GET /api/dashboard/activity
// @access  Private
exports.getActivityFeed = async (req, res) => {
  try {
    // Get recent bookings
    const recentBookings = await Booking.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('program', 'title')
      .populate('accommodation', 'name');

    // Format activities
    const activities = recentBookings.map(booking => {
      let activityType = 'booking_created';
      if (booking.status === 'cancelled') {
        activityType = 'booking_cancelled';
      } else if (booking.status === 'confirmed') {
        activityType = 'booking_confirmed';
      } else if (booking.status === 'completed') {
        activityType = 'booking_completed';
      }

      return {
        id: booking._id,
        type: activityType,
        timestamp: booking.updatedAt || booking.createdAt,
        details: {
          programTitle: booking.program.title,
          accommodationName: booking.accommodation.name,
          startDate: booking.startDate,
          endDate: booking.endDate,
          amount: booking.totalAmount
        }
      };
    });

    res.status(200).json({
      success: true,
      data: activities
    });
  } catch (error) {
    console.error('Error fetching activity feed:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch activity feed',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};
