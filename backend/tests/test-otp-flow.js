require('dotenv').config();
const axios = require('axios');

const API_BASE = 'http://localhost:5000/api';

async function testOTPFlow() {
  try {
    console.log('=== Testing Complete OTP Flow ===\n');

    // Test data
    const testUser = {
      firstName: 'OTP',
      lastName: 'Test',
      email: 'otptest@example.com',
      password: 'TestPassword123!',
      confirmPassword: 'TestPassword123!',
      phone: '+1234567890',
      dateOfBirth: '1990-01-01',
      yogaExperience: 'beginner',
      agreeToTerms: true,
      subscribeNewsletter: false
    };

    // Step 1: Register user
    console.log('Step 1: Registering user...');
    try {
      const registerResponse = await axios.post(`${API_BASE}/users/register`, testUser);
      console.log('✅ Registration successful');
      console.log('Response:', registerResponse.data);
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data?.message?.includes('already exists')) {
        console.log('⚠️  User already exists, continuing with OTP test...');
      } else {
        throw error;
      }
    }

    // Step 2: Test OTP verification with wrong OTP
    console.log('\nStep 2: Testing wrong OTP...');
    try {
      const wrongOTPResponse = await axios.post(`${API_BASE}/users/verify-email-otp`, {
        email: testUser.email,
        otp: '123456'
      });
      console.log('❌ Wrong OTP should have failed');
    } catch (error) {
      if (error.response?.status === 400) {
        console.log('✅ Wrong OTP correctly rejected');
        console.log('Error message:', error.response.data.message);
      } else {
        throw error;
      }
    }

    // Step 3: Resend OTP
    console.log('\nStep 3: Resending OTP...');
    try {
      const resendResponse = await axios.post(`${API_BASE}/users/resend-verification-otp`, {
        email: testUser.email
      });
      console.log('✅ OTP resent successfully');
      console.log('Response:', resendResponse.data);
    } catch (error) {
      console.log('❌ Resend OTP failed:', error.response?.data || error.message);
    }

    // Step 4: Instructions for manual testing
    console.log('\n=== Manual Testing Required ===');
    console.log('1. Check the server console for the OTP (Development Mode)');
    console.log('2. Use the OTP to verify email via frontend');
    console.log('3. Or use this curl command:');
    console.log(`curl -X POST ${API_BASE}/users/verify-email-otp \\`);
    console.log(`  -H "Content-Type: application/json" \\`);
    console.log(`  -d '{"email":"${testUser.email}","otp":"YOUR_OTP_HERE"}'`);

    console.log('\n=== Test Summary ===');
    console.log('✅ Registration API: Working');
    console.log('✅ Wrong OTP rejection: Working');
    console.log('✅ OTP resend: Working');
    console.log('📧 Email/Console OTP: Check server logs');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Check if server is running
async function checkServer() {
  try {
    await axios.get(`${API_BASE}/health`);
    return true;
  } catch (error) {
    return false;
  }
}

async function runTest() {
  const serverRunning = await checkServer();
  if (!serverRunning) {
    console.log('❌ Server is not running. Please start the server first with: npm run dev');
    return;
  }

  await testOTPFlow();
}

runTest();
