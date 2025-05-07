const express = require('express');
const {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');

const router = express.Router();

// Get all testimonials and create new testimonial
router.route('/')
  .get(getAllTestimonials)
  .post(createTestimonial);

// Get, update, and delete testimonial by ID
router.route('/:id')
  .get(getTestimonialById)
  .put(updateTestimonial)
  .delete(deleteTestimonial);

module.exports = router;