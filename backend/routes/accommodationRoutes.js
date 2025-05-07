const express = require('express');
const {
  getAllAccommodations,
  getAccommodationById,
  createAccommodation,
  updateAccommodation,
  deleteAccommodation
} = require('../controllers/accommodationController');

const router = express.Router();

// Get all accommodations and create new accommodation
router.route('/')
  .get(getAllAccommodations)
  .post(createAccommodation);

// Get, update, and delete accommodation by ID
router.route('/:id')
  .get(getAccommodationById)
  .put(updateAccommodation)
  .delete(deleteAccommodation);

module.exports = router;