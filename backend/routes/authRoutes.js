const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middlewares/auth');
const { sendResponse, sendError } = require('../utils/apiResponse');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      dateOfBirth,
      yogaExperience,
      subscribeNewsletter
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendError(res, 'User already exists with this email', 400);
    }

    // Create user (let the User model handle password hashing)
    const user = new User({
      name,
      email,
      password, // Don't hash here - let the pre-save middleware handle it
      phone,
      dateOfBirth,
      yogaExperience,
      subscribeNewsletter: subscribeNewsletter || false,
      role: 'user'
    });

    // Generate email verification OTP
    const otp = user.generateEmailVerificationOTP();
    await user.save();

    // Send OTP via email
    const emailService = require('../services/emailService');
    try {
      await emailService.sendEmailVerificationOTP(user.email, otp, user.name);
      console.log(`OTP generated for ${user.email}: ${otp}`); // Log for development
    } catch (emailError) {
      console.error('Error sending verification email:', emailError);
      // In development, log the OTP so user can still verify
      if (process.env.NODE_ENV === 'development') {
        console.log(`\n=== DEVELOPMENT MODE - OTP for ${user.email}: ${otp} ===\n`);
      }
      // Continue with registration even if email fails
    }

    // Return success without token (user needs to verify email first)
    const responseData = {
      message: 'Registration successful! Please check your email for verification code.',
      data: {
        email: user.email,
        name: user.name
      }
    };

    // In development mode, include OTP for easier testing
    if (process.env.NODE_ENV === 'development') {
      responseData.devOTP = otp;
    }

    sendResponse(res, responseData, 201);

  } catch (error) {
    console.error('Registration error:', error);
    sendError(res, 'Registration failed', 500);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    // Debug logging
    console.log('Login attempt:', { email, passwordProvided: !!password, rememberMe });

    // Validate input
    if (!email || !password) {
      return sendError(res, 'Email and password are required', 400);
    }

    // Find user and explicitly select password field
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return sendError(res, 'Invalid email or password', 401);
    }

    // Debug user found
    console.log('User found:', { email: user.email, hasPassword: !!user.password, emailVerified: user.emailVerified });

    // Check if email is verified
    if (!user.emailVerified) {
      return sendError(res, 'Please verify your email before logging in', 401);
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendError(res, 'Invalid email or password', 401);
    }

    // Generate JWT token
    const expiresIn = rememberMe ? '30d' : '7d';
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn }
    );

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    sendResponse(res, {
      message: 'Login successful',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    sendError(res, 'Login failed', 500);
  }
});

// Get current user
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return sendError(res, 'User not found', 404);
    }

    sendResponse(res, user);
  } catch (error) {
    console.error('Get user error:', error);
    sendError(res, 'Failed to get user data', 500);
  }
});

// Update profile
router.put('/profile', protect, async (req, res) => {
  try {
    const {
      name,
      phone,
      dateOfBirth,
      yogaExperience,
      subscribeNewsletter
    } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return sendError(res, 'User not found', 404);
    }

    // Update fields
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (dateOfBirth) user.dateOfBirth = dateOfBirth;
    if (yogaExperience) user.yogaExperience = yogaExperience;
    if (typeof subscribeNewsletter === 'boolean') user.subscribeNewsletter = subscribeNewsletter;

    await user.save();

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    sendResponse(res, {
      message: 'Profile updated successfully',
      user: userResponse
    });

  } catch (error) {
    console.error('Profile update error:', error);
    sendError(res, 'Failed to update profile', 500);
  }
});

// Change password
router.put('/change-password', protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id).select('+password');
    if (!user) {
      return sendError(res, 'User not found', 404);
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      return sendError(res, 'Current password is incorrect', 400);
    }

    // Set new password (let the User model handle hashing)
    user.password = newPassword;
    await user.save();

    sendResponse(res, {
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('Change password error:', error);
    sendError(res, 'Failed to change password', 500);
  }
});

// Logout (optional - mainly for token blacklisting if implemented)
router.post('/logout', protect, async (req, res) => {
  try {
    // In a more sophisticated setup, you might want to blacklist the token
    // For now, we'll just send a success response
    sendResponse(res, {
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Logout error:', error);
    sendError(res, 'Logout failed', 500);
  }
});

// Forgot password (placeholder - would need email service)
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if email exists or not for security
      return sendResponse(res, {
        message: 'If an account with that email exists, a password reset link has been sent.'
      });
    }

    // TODO: Implement email service to send reset link
    // For now, just return success message
    sendResponse(res, {
      message: 'If an account with that email exists, a password reset link has been sent.'
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    sendError(res, 'Failed to process password reset request', 500);
  }
});

// Reset password (placeholder)
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;

    // TODO: Implement token verification and password reset
    // For now, just return success message
    sendResponse(res, {
      message: 'Password reset successful'
    });

  } catch (error) {
    console.error('Reset password error:', error);
    sendError(res, 'Failed to reset password', 500);
  }
});

// Verify email with OTP
router.post('/verify-email-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return sendError(res, 'Email and OTP are required', 400);
    }

    const user = await User.findOne({ email });

    if (!user) {
      return sendError(res, 'User not found', 400);
    }

    if (user.emailVerified) {
      return sendError(res, 'Email is already verified', 400);
    }

    // Verify OTP
    if (!user.verifyEmailOTP(otp)) {
      return sendError(res, 'Invalid or expired OTP', 400);
    }

    // Set email as verified
    user.emailVerified = true;
    user.emailVerificationOTP = undefined;
    user.emailVerificationOTPExpire = undefined;
    await user.save();

    sendResponse(res, {
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Email verification error:', error);
    sendError(res, 'Failed to verify email', 500);
  }
});

// Resend email verification OTP
router.post('/resend-verification-otp', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return sendError(res, 'Email is required', 400);
    }

    const user = await User.findOne({ email });

    if (!user) {
      return sendError(res, 'User not found', 400);
    }

    if (user.emailVerified) {
      return sendError(res, 'Email is already verified', 400);
    }

    // Generate new OTP
    const otp = user.generateEmailVerificationOTP();
    await user.save();

    // Send OTP via email
    const emailService = require('../services/emailService');
    try {
      await emailService.sendEmailVerificationOTP(user.email, otp, user.name);
      console.log(`Resent OTP for ${user.email}: ${otp}`); // Log for development
    } catch (emailError) {
      console.error('Error sending verification email:', emailError);
      // In development, log the OTP so user can still verify
      if (process.env.NODE_ENV === 'development') {
        console.log(`\n=== DEVELOPMENT MODE - Resent OTP for ${user.email}: ${otp} ===\n`);
        // Don't fail in development mode
      } else {
        return sendError(res, 'Failed to send verification email', 500);
      }
    }

    sendResponse(res, {
      message: 'Verification code sent successfully'
    });
  } catch (error) {
    console.error('Error resending verification OTP:', error);
    sendError(res, 'Failed to resend verification code', 500);
  }
});

// Verify email (placeholder)
router.post('/verify-email', async (req, res) => {
  try {
    const { token } = req.body;

    // TODO: Implement email verification
    // For now, just return success message
    sendResponse(res, {
      message: 'Email verified successfully'
    });

  } catch (error) {
    console.error('Email verification error:', error);
    sendError(res, 'Failed to verify email', 500);
  }
});

module.exports = router;