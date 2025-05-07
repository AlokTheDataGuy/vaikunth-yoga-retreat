const Program = require('../models/Program');
const Accommodation = require('../models/Accommodation');
const emailService = require('../services/emailService');

/**
 * @desc    Submit a booking request (no authentication required)
 * @route   POST /api/booking
 * @access  Public
 */
exports.submitBookingRequest = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      program,
      accommodation,
      guests,
      checkIn,
      checkOut,
      specialRequests
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !program || !accommodation || !guests || !checkIn || !checkOut) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create booking request object
    const bookingRequest = {
      firstName,
      lastName,
      email,
      phone,
      program,
      accommodation,
      guests,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      specialRequests: specialRequests || '',
      status: 'pending',
      createdAt: new Date()
    };

    // In a real application, you would save this to a database
    // For now, we'll just send an email notification

    // Get program and accommodation details (mock data for demo)
    const programDetails = {
      title: getProgramTitle(program),
      startDate: new Date(checkIn),
      endDate: new Date(checkOut)
    };

    const accommodationDetails = {
      name: getAccommodationName(accommodation)
    };

    // Send email to admin
    await emailService.sendBookingNotificationToAdmin(
      { 
        _id: generateBookingId(),
        ...bookingRequest,
        totalAmount: calculateTotalAmount(accommodation, checkIn, checkOut),
        paymentStatus: 'pending'
      },
      {
        firstName,
        lastName,
        email,
        phone
      },
      programDetails,
      accommodationDetails
    );

    // Send confirmation email to user
    await emailService.sendBookingConfirmation(
      {
        _id: generateBookingId(),
        ...bookingRequest,
        totalAmount: calculateTotalAmount(accommodation, checkIn, checkOut),
        paymentStatus: 'pending',
        status: 'pending'
      },
      {
        firstName,
        lastName,
        email,
        phone
      },
      programDetails,
      accommodationDetails
    );

    res.status(200).json({
      success: true,
      message: 'Booking request submitted successfully. You will receive a confirmation email shortly.',
      data: {
        bookingId: generateBookingId(),
        ...bookingRequest
      }
    });
  } catch (error) {
    console.error('Error submitting booking request:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit booking request',
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};

/**
 * @desc    Get available programs
 * @route   GET /api/booking/programs
 * @access  Public
 */
exports.getAvailablePrograms = async (req, res) => {
  try {
    // Mock data for available programs
    const programs = [
      { id: 'ytt', name: '200-Hour Yoga Teacher Training' },
      { id: 'meditation', name: 'Meditation & Mindfulness Retreat' },
      { id: 'ayurveda', name: 'Ayurvedic Panchakarma Cleanse' },
      { id: 'trek', name: 'Himalayan Trek & Yoga Adventure' },
      { id: 'wellness', name: 'Wellness Detox Program' },
      { id: 'spiritual', name: 'Spiritual Healing Retreat' }
    ];

    res.status(200).json({
      success: true,
      count: programs.length,
      data: programs
    });
  } catch (error) {
    console.error('Error fetching available programs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch available programs',
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};

/**
 * @desc    Get available accommodations
 * @route   GET /api/booking/accommodations
 * @access  Public
 */
exports.getAvailableAccommodations = async (req, res) => {
  try {
    // Mock data for available accommodations
    const accommodations = [
      { id: 'standard', name: 'Standard Room', price: 50 },
      { id: 'deluxe', name: 'Deluxe Room', price: 80 },
      { id: 'suite', name: 'Himalayan Suite', price: 120 },
      { id: 'cottage', name: 'Private Cottage', price: 150 },
      { id: 'dormitory', name: 'Shared Dormitory', price: 30 }
    ];

    res.status(200).json({
      success: true,
      count: accommodations.length,
      data: accommodations
    });
  } catch (error) {
    console.error('Error fetching available accommodations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch available accommodations',
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};

// Helper functions
function generateBookingId() {
  return 'BK' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
}

function calculateTotalAmount(accommodationType, checkIn, checkOut) {
  const priceMap = {
    'standard': 50,
    'deluxe': 80,
    'suite': 120,
    'cottage': 150,
    'dormitory': 30
  };

  const price = priceMap[accommodationType] || 50;
  const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
  
  return price * nights;
}

function getProgramTitle(programId) {
  const programMap = {
    'ytt': '200-Hour Yoga Teacher Training',
    'meditation': 'Meditation & Mindfulness Retreat',
    'ayurveda': 'Ayurvedic Panchakarma Cleanse',
    'trek': 'Himalayan Trek & Yoga Adventure',
    'wellness': 'Wellness Detox Program',
    'spiritual': 'Spiritual Healing Retreat'
  };

  return programMap[programId] || 'Yoga Retreat Program';
}

function getAccommodationName(accommodationId) {
  const accommodationMap = {
    'standard': 'Standard Room',
    'deluxe': 'Deluxe Room',
    'suite': 'Himalayan Suite',
    'cottage': 'Private Cottage',
    'dormitory': 'Shared Dormitory'
  };

  return accommodationMap[accommodationId] || 'Standard Accommodation';
}
