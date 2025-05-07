const express = require('express');
const {
  submitContactForm,
  subscribeToNewsletter
} = require('../controllers/publicContactController');

const router = express.Router();

// Submit contact form
router.route('/').post(submitContactForm);

// Subscribe to newsletter
router.route('/newsletter').post(subscribeToNewsletter);

module.exports = router;
