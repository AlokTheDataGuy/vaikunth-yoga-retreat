require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

async function fixUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const email = 'iamadsmart@gmail.com';

    // Find the problematic user
    const user = await User.findOne({ email });
    if (user) {
      console.log('Found user:', {
        email: user.email,
        name: user.name,
        hasPassword: !!user.password,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt
      });

      // Delete the user so they can re-register properly
      await User.deleteOne({ email });
      console.log('✅ User deleted successfully');
      console.log('👉 You can now re-register with this email');
    } else {
      console.log('❌ User not found');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

fixUser();
