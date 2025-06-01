require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmailDirect() {
  console.log('=== TESTING EMAIL CONFIGURATION ===');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASSWORD length:', process.env.EMAIL_PASSWORD?.length);
  console.log('EMAIL_FROM:', process.env.EMAIL_FROM);

  // Test 1: Direct Gmail configuration
  console.log('\n--- Test 1: Direct Gmail Service ---');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true,
    logger: true
  });

  try {
    // Verify connection
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✅ Connection verified successfully!');

    // Send test email
    console.log('Sending test email...');
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'Test Email - OTP System',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the OTP system is working.</p>
        <div style="background: #f0f0f0; padding: 20px; text-align: center; font-size: 24px; font-weight: bold;">
          123456
        </div>
        <p>If you received this email, the configuration is working!</p>
      `
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);

  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
  }
}

// Test 2: Using our email service
async function testEmailService() {
  console.log('\n--- Test 2: Using Email Service ---');
  try {
    const emailService = require('../services/emailService');

    if (!emailService.isAvailable()) {
      console.log('❌ Email service is not available');
      return;
    }

    const result = await emailService.sendEmailVerificationOTP(
      process.env.EMAIL_USER,
      '654321',
      'Test User'
    );
    console.log('✅ Email service test successful:', result);
  } catch (error) {
    console.error('❌ Email service test failed:', error);
  }
}

async function runTests() {
  await testEmailDirect();
  await testEmailService();
  console.log('\n=== TESTS COMPLETED ===');
}

runTests();
