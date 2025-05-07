const nodemailer = require('nodemailer');

/**
 * Email service for sending various types of emails
 */
class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
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
            <p>Phone: +91 98765 43210</p>
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
}

module.exports = new EmailService();
