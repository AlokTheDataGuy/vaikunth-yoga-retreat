const emailService = require('../services/emailService');

/**
 * @desc    Submit a contact form
 * @route   POST /api/contact
 * @access  Public
 */
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message, preferredContact } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, subject, and message'
      });
    }

    // Create contact data object
    const contactData = {
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
      preferredContact: preferredContact || 'email',
      submittedAt: new Date()
    };

    // In a real application, you would save this to a database
    // For now, we'll just send an email notification

    // Send email to admin
    await emailService.sendContactFormEmail(contactData);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.',
      data: {
        name,
        email,
        submittedAt: new Date()
      }
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};

/**
 * @desc    Subscribe to newsletter
 * @route   POST /api/contact/newsletter
 * @access  Public
 */
exports.subscribeToNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address'
      });
    }

    // In a real application, you would save this to a database
    // For now, we'll just send a confirmation email

    // Send confirmation email to subscriber
    await emailService.sendNewsletterConfirmation(email);

    res.status(200).json({
      success: true,
      message: 'You have been successfully subscribed to our newsletter.',
      data: {
        email,
        subscribedAt: new Date()
      }
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter',
      error: process.env.NODE_ENV === 'production' ? {} : error.message
    });
  }
};
