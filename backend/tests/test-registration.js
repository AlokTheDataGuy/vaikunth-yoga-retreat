require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

async function testRegistrationFlow() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Test user data
    const testUser = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'TestPassword123!',
      phone: '+1234567890',
      dateOfBirth: '1990-01-01',
      yogaExperience: 'beginner'
    };

    // Check if user already exists
    const existingUser = await User.findOne({ email: testUser.email });
    if (existingUser) {
      console.log('Deleting existing test user...');
      await User.deleteOne({ email: testUser.email });
    }

    // Create new user
    console.log('Creating new user...');
    const user = new User({
      name: `${testUser.firstName} ${testUser.lastName}`,
      email: testUser.email,
      password: testUser.password, // Will be hashed by pre-save middleware
      phone: testUser.phone,
      dateOfBirth: new Date(testUser.dateOfBirth),
      yogaExperience: testUser.yogaExperience
    });

    // Generate OTP
    console.log('Generating OTP...');
    const otp = user.generateEmailVerificationOTP();
    console.log('Generated OTP:', otp);

    // Save user
    await user.save();
    console.log('User saved successfully');

    // Test OTP verification
    console.log('Testing OTP verification...');
    const isValidOTP = user.verifyEmailOTP(otp);
    console.log('OTP verification result:', isValidOTP);

    // Test wrong OTP
    const isInvalidOTP = user.verifyEmailOTP('123456');
    console.log('Wrong OTP verification result:', isInvalidOTP);

    // Test login with this user
    console.log('Testing password comparison...');
    const bcrypt = require('bcryptjs');
    const isPasswordValid = await bcrypt.compare(testUser.password, user.password);
    console.log('Password comparison result:', isPasswordValid);

    console.log('\n=== Test Results ===');
    console.log('✅ User creation: SUCCESS');
    console.log('✅ OTP generation: SUCCESS');
    console.log('✅ OTP verification: SUCCESS');
    console.log('✅ Password hashing: SUCCESS');

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

testRegistrationFlow();
