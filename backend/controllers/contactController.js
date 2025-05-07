const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message, preferredContact } = req.body;

    // Create new contact entry
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
      preferredContact
    });

    // Send email notification (in a production environment, you would configure this with real credentials)
    if (process.env.NODE_ENV === 'production' && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || 'info@vaikunthyogaretreat.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      // Email to user (confirmation)
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Vaikunth Yoga Retreat',
        html: `
          <h2>Thank you for contacting Vaikunth Yoga Retreat</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p>Warm regards,</p>
          <p>The Vaikunth Yoga Retreat Team</p>
        `
      };

      // Send emails
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.',
      data: contact
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};

// @desc    Get all contact submissions (for admin)
// @route   GET /api/contact
// @access  Private (would require authentication in a real app)
exports.getContactSubmissions = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submissions',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
};
