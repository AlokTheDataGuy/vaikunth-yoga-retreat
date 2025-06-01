const nodemailer = require('nodemailer');

/**
 * Email service for sending various types of emails
 */
class EmailService {
  constructor() {
    // Check if email configuration is available
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn('Email configuration not found. Email functionality will be disabled.');
      this.transporter = null;
      return;
    }

    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true, // Enable debug mode
      logger: true // Enable logging
    });

    // Verify connection configuration
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('Email transporter verification failed:', error);
      } else {
        console.log('Email server is ready to take our messages');
      }
    });
  }

  /**
   * Check if email service is available
   */
  isAvailable() {
    return this.transporter !== null;
  }

  /**
   * Send a booking confirmation email to the customer
   * @param {Object} booking - The booking object
   * @param {Object} user - The user object
   * @param {Object} program - The program object
   * @param {Object} accommodation - The accommodation object
   * @returns {Promise} - Nodemailer send result
   */
  async sendBookingConfirmation(booking, user, program, accommodation) {
    const bookingDate = new Date(booking.createdAt).toLocaleDateString();
    const startDate = new Date(program.startDate).toLocaleDateString();
    const endDate = new Date(program.endDate).toLocaleDateString();

    const mailOptions = {
      from: `"Vaikunth Yoga Retreat" <${process.env.EMAIL_FROM}>`,
      to: user.email,
      subject: 'Your Booking Confirmation - Vaikunth Yoga Retreat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2a5d45; margin-bottom: 5px;">Booking Confirmation</h1>
            <p style="color: #666; font-size: 16px;">Thank you for choosing Vaikunth Yoga Retreat</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2a5d45; margin-top: 0;">Booking Details</h2>
            <p><strong>Booking ID:</strong> ${booking._id}</p>
            <p><strong>Booking Date:</strong> ${bookingDate}</p>
            <p><strong>Status:</strong> ${booking.status}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Program Information</h2>
            <p><strong>Program:</strong> ${program.title}</p>
            <p><strong>Dates:</strong> ${startDate} to ${endDate}</p>
            <p><strong>Accommodation:</strong> ${accommodation.name}</p>
            <p><strong>Guests:</strong> ${booking.guests}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Payment Information</h2>
            <p><strong>Total Amount:</strong> $${booking.totalAmount.toFixed(2)}</p>
            <p><strong>Deposit Required (30%):</strong> $${(booking.totalAmount * 0.3).toFixed(2)}</p>
            <p><strong>Payment Status:</strong> ${booking.paymentStatus}</p>
          </div>

          <div style="background-color: #f0f7f4; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2a5d45; margin-top: 0;">Next Steps</h2>
            <p>To confirm your booking, please make a deposit payment of 30% within the next 48 hours. You will receive payment instructions separately.</p>
            <p>The remaining balance is due 30 days before your arrival date.</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Need Help?</h2>
            <p>If you have any questions or need to make changes to your booking, please contact us at:</p>
            <p>Email: <a href="mailto:info@vaikunthyogaretreat.com" style="color: #2a5d45;">info@vaikunthyogaretreat.com</a></p>
            <p>Phone: +91 73006 20149</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">We look forward to welcoming you to Vaikunth Yoga Retreat!</p>
            <p style="color: #666; font-size: 12px;">© 2023 Vaikunth Yoga Retreat. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    return this.transporter.sendMail(mailOptions);
  }

  /**
   * Send a booking notification email to the admin
   * @param {Object} booking - The booking object
   * @param {Object} user - The user object
   * @param {Object} program - The program object
   * @param {Object} accommodation - The accommodation object
   * @returns {Promise} - Nodemailer send result
   */
  async sendBookingNotificationToAdmin(booking, user, program, accommodation) {
    const bookingDate = new Date(booking.createdAt).toLocaleDateString();
    const startDate = new Date(program.startDate).toLocaleDateString();
    const endDate = new Date(program.endDate).toLocaleDateString();

    const mailOptions = {
      from: `"Vaikunth Yoga Retreat" <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Booking Received - Vaikunth Yoga Retreat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2a5d45; margin-bottom: 5px;">New Booking Received</h1>
            <p style="color: #666; font-size: 16px;">A new booking has been made on the website</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2a5d45; margin-top: 0;">Booking Details</h2>
            <p><strong>Booking ID:</strong> ${booking._id}</p>
            <p><strong>Booking Date:</strong> ${bookingDate}</p>
            <p><strong>Status:</strong> ${booking.status}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Customer Information</h2>
            <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Program Information</h2>
            <p><strong>Program:</strong> ${program.title}</p>
            <p><strong>Dates:</strong> ${startDate} to ${endDate}</p>
            <p><strong>Accommodation:</strong> ${accommodation.name}</p>
            <p><strong>Guests:</strong> ${booking.guests}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Payment Information</h2>
            <p><strong>Total Amount:</strong> $${booking.totalAmount.toFixed(2)}</p>
            <p><strong>Payment Status:</strong> ${booking.paymentStatus}</p>
          </div>

          <div style="background-color: #f0f7f4; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2a5d45; margin-top: 0;">Special Requests</h2>
            <p>${booking.specialRequests || 'No special requests'}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">Please log in to the admin dashboard to manage this booking.</p>
            <p style="color: #666; font-size: 12px;">© 2023 Vaikunth Yoga Retreat. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    return this.transporter.sendMail(mailOptions);
  }

  /**
   * Send a contact form submission email
   * @param {Object} contactData - The contact form data
   * @returns {Promise} - Nodemailer send result
   */
  async sendContactFormEmail(contactData) {
    const mailOptions = {
      from: `"Vaikunth Yoga Retreat" <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission - Vaikunth Yoga Retreat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2a5d45; margin-bottom: 5px;">New Contact Form Submission</h1>
            <p style="color: #666; font-size: 16px;">A new message has been submitted through the contact form</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Contact Information</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2a5d45; margin-top: 0;">Message</h2>
            <p>${contactData.message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 12px;">© 2023 Vaikunth Yoga Retreat. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    return this.transporter.sendMail(mailOptions);
  }

  /**
   * Send a newsletter subscription confirmation
   * @param {string} email - The subscriber's email
   * @returns {Promise} - Nodemailer send result
   */
  async sendNewsletterConfirmation(email) {
    const mailOptions = {
      from: `"Vaikunth Yoga Retreat" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Welcome to Our Newsletter - Vaikunth Yoga Retreat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2a5d45; margin-bottom: 5px;">Welcome to Our Newsletter!</h1>
            <p style="color: #666; font-size: 16px;">Thank you for subscribing to the Vaikunth Yoga Retreat newsletter</p>
          </div>

          <div style="background-color: #f0f7f4; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2a5d45; margin-top: 0;">What to Expect</h2>
            <p>You'll receive:</p>
            <ul>
              <li>Monthly wellness tips and yoga practices</li>
              <li>Exclusive retreat offers and early bird discounts</li>
              <li>Inspiring stories from our community</li>
              <li>Seasonal Ayurvedic wisdom</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #2a5d45;">Connect With Us</h2>
            <p>Follow us on social media for daily inspiration:</p>
            <p>
              <a href="https://www.facebook.com/vaikunthyogaretreat" style="color: #2a5d45;">Facebook</a> |
              <a href="https://www.instagram.com/vaikunthyogaretreat" style="color: #2a5d45;">Instagram</a> |
              <a href="https://www.youtube.com/vaikunthyogaretreat" style="color: #2a5d45;">YouTube</a>
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">We're excited to have you join our community!</p>
            <p style="color: #666; font-size: 12px;">© 2023 Vaikunth Yoga Retreat. All rights reserved.</p>
            <p style="color: #666; font-size: 10px;">If you wish to unsubscribe, click <a href="#" style="color: #2a5d45;">here</a>.</p>
          </div>
        </div>
      `,
    };

    return this.transporter.sendMail(mailOptions);
  }

  /**
   * Send email verification OTP
   * @param {string} email - The user's email
   * @param {string} otp - The 6-digit OTP
   * @param {string} name - The user's name
   * @returns {Promise} - Nodemailer send result
   */
  async sendEmailVerificationOTP(email, otp, name) {
    // If email service is not available, log the OTP for development
    if (!this.isAvailable()) {
      console.log('\n=== EMAIL SERVICE NOT AVAILABLE ===');
      console.log(`OTP for ${email} (${name}): ${otp}`);
      console.log('Please use this OTP to verify your email.');
      console.log('=====================================\n');
      return { messageId: 'dev-mode', response: 'Email logged to console' };
    }

    const mailOptions = {
      from: `"Vaikunth Yoga Retreat" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Email Verification Code - Vaikunth Yoga Retreat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2a5d45; margin-bottom: 5px;">Email Verification</h1>
            <p style="color: #666; font-size: 16px;">Welcome to Vaikunth Yoga Retreat</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 10px;">Hello ${name},</p>
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
              Thank you for registering with Vaikunth Yoga Retreat. To complete your registration,
              please verify your email address using the verification code below:
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <div style="background-color: #2a5d45; color: white; font-size: 32px; font-weight: bold;
                          padding: 20px; border-radius: 8px; letter-spacing: 8px; display: inline-block;">
                ${otp}
              </div>
            </div>

            <p style="color: #333; font-size: 16px; margin-bottom: 10px;">
              This verification code will expire in <strong>15 minutes</strong>.
            </p>

            <p style="color: #666; font-size: 14px; margin-bottom: 0;">
              If you didn't create an account with us, please ignore this email.
            </p>
          </div>

          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="color: #2a5d45; font-size: 14px; margin: 0; text-align: center;">
              <strong>Security Tip:</strong> Never share this verification code with anyone.
              Our team will never ask for your verification code.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">Welcome to our spiritual community!</p>
            <p style="color: #666; font-size: 12px;">© 2023 Vaikunth Yoga Retreat. All rights reserved.</p>
          </div>
        </div>
      `
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('OTP email sent successfully:', result.messageId);
      return result;
    } catch (error) {
      console.error('Failed to send OTP email:', error);
      // In development, still log the OTP so user can proceed
      if (process.env.NODE_ENV === 'development') {
        console.log('\n=== EMAIL FAILED - DEVELOPMENT MODE ===');
        console.log(`OTP for ${email} (${name}): ${otp}`);
        console.log('Please use this OTP to verify your email.');
        console.log('=======================================\n');
      }
      throw error;
    }
  }
}

module.exports = new EmailService();
