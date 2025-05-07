const express = require('express');
const { submitContactForm, getContactSubmissions } = require('../controllers/contactController');
const router = express.Router();

// Submit contact form
router.post('/', submitContactForm);

// Get all contact submissions (would be protected in a real app)
router.get('/', getContactSubmissions);

module.exports = router;
