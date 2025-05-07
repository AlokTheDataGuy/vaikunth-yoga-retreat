const Accommodation = require('../models/Accommodation');

// @desc    Get all accommodations
// @route   GET /api/accommodations
// @access  Public
exports.getAllAccommodations = async (req, res) => {
  try {
    // Build query
    const query = {};

    // Filter by type
    if (req.query.type) {
      query.type = req.query.type;
    }

    // Filter by capacity
    if (req.query.capacity) {
      query.capacity = { $gte: parseInt(req.query.capacity) };
    }

    // Filter by price range
    if (req.query.maxPrice) {
      query.pricePerNight = { $lte: parseInt(req.query.maxPrice) };
    }

    // Get accommodations
    const accommodations = await Accommodation.find(query).sort({ pricePerNight: 1 });

    res.status(200).json({
      success: true,
      count: accommodations.length,
      data: accommodations
    });
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch accommodations',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get accommodation by ID
// @route   GET /api/accommodations/:id
// @access  Public
exports.getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    res.status(200).json({
      success: true,
      data: accommodation
    });
  } catch (error) {
    console.error('Error fetching accommodation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch accommodation',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Create new accommodation
// @route   POST /api/accommodations
// @access  Private (Admin)
exports.createAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Accommodation created successfully',
      data: accommodation
    });
  } catch (error) {
    console.error('Error creating accommodation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create accommodation',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Update accommodation
// @route   PUT /api/accommodations/:id
// @access  Private (Admin)
exports.updateAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Accommodation updated successfully',
      data: accommodation
    });
  } catch (error) {
    console.error('Error updating accommodation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update accommodation',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Delete accommodation
// @route   DELETE /api/accommodations/:id
// @access  Private (Admin)
exports.deleteAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findByIdAndDelete(req.params.id);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Accommodation deleted successfully',
      data: {}
    });
  } catch (error) {
    console.error('Error deleting accommodation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete accommodation',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};