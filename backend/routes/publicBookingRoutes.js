const express = require('express');
const {
  submitBookingRequest,
  getAvailablePrograms,
  getAvailableAccommodations
} = require('../controllers/publicBookingController');

const router = express.Router();

// Submit booking request (no authentication required)
router.route('/').post(submitBookingRequest);

// Get available programs
router.route('/programs').get(getAvailablePrograms);

// Get available accommodations
router.route('/accommodations').get(getAvailableAccommodations);

module.exports = router;
