const Program = require('../models/Program');

// @desc    Get all programs
// @route   GET /api/programs
// @access  Public
exports.getAllPrograms = async (req, res) => {
  try {
    // Build query
    const query = {};

    // Filter by category
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Filter by level
    if (req.query.level) {
      query.level = req.query.level;
    }

    // Filter by date range
    if (req.query.startDate) {
      query.startDate = { $gte: new Date(req.query.startDate) };
    }

    // Get programs
    const programs = await Program.find(query).sort({ startDate: 1 });

    res.status(200).json({
      success: true,
      count: programs.length,
      data: programs
    });
  } catch (error) {
    console.error('Error fetching programs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch programs',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get featured programs
// @route   GET /api/programs/featured
// @access  Public
exports.getFeaturedPrograms = async (req, res) => {
  try {
    const programs = await Program.find({ featured: true }).sort({ startDate: 1 }).limit(6);

    res.status(200).json({
      success: true,
      count: programs.length,
      data: programs
    });
  } catch (error) {
    console.error('Error fetching featured programs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured programs',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get program by ID
// @route   GET /api/programs/:id
// @access  Public
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    res.status(200).json({
      success: true,
      data: program
    });
  } catch (error) {
    console.error('Error fetching program:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch program',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Create new program
// @route   POST /api/programs
// @access  Private (Admin)
exports.createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Program created successfully',
      data: program
    });
  } catch (error) {
    console.error('Error creating program:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create program',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Update program
// @route   PUT /api/programs/:id
// @access  Private (Admin)
exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Program updated successfully',
      data: program
    });
  } catch (error) {
    console.error('Error updating program:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update program',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Delete program
// @route   DELETE /api/programs/:id
// @access  Private (Admin)
exports.deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Program deleted successfully',
      data: {}
    });
  } catch (error) {
    console.error('Error deleting program:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete program',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};