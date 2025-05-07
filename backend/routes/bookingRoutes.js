const express = require('express');
const {
  getAllBookings,
  getUserBookings,
  getBookingById,
  createBooking,
  updateBooking,
  cancelBooking,
  checkAvailability,
  getUpcomingPrograms
} = require('../controllers/bookingController');

// Middleware
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

// Check availability (public)
router.route('/availability')
  .get(checkAvailability);

// Get upcoming programs with availability (public)
router.route('/upcoming-programs')
  .get(getUpcomingPrograms);

// Get user bookings
router.route('/me')
  .get(protect, getUserBookings);

// Get all bookings (admin only) and create new booking
router.route('/')
  .get(protect, authorize('admin'), getAllBookings)
  .post(protect, createBooking);

// Get, update, and delete booking by ID
router.route('/:id')
  .get(protect, getBookingById)
  .put(protect, authorize('admin'), updateBooking);

// Cancel booking
router.route('/:id/cancel')
  .put(protect, cancelBooking);

module.exports = router;