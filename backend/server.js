const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config();

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const publicContactRoutes = require('./routes/publicContactRoutes');
const programRoutes = require('./routes/programRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const blogRoutes = require('./routes/blogRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const publicBookingRoutes = require('./routes/publicBookingRoutes');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Initialize express app
const app = express();

// Middleware
// Configure CORS based on environment
if (process.env.NODE_ENV === 'production') {
  // In production, only allow requests from our own domain
  app.use(cors({
    origin: true, // This allows the same origin
    credentials: true
  }));
} else {
  // In development, allow all origins
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api/contact', contactRoutes); // Protected contact routes
app.use('/api/contact', publicContactRoutes); // Public contact routes (no auth required)
app.use('/api/programs', programRoutes);
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/bookings', bookingRoutes); // Protected booking routes
app.use('/api/booking', publicBookingRoutes); // Public booking routes (no auth required)
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Serve from backend/public directory (where frontend build is copied during deployment)
  app.use(express.static(path.join(__dirname, 'public')));

  // Fallback to index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server Error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Set port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();

    // Check if port is in use and try alternative ports if needed
    const server = app.listen(PORT)
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${PORT} is already in use.`);
          console.log('Trying alternative port...');

          // Try an alternative port (PORT + 1)
          const alternativePort = PORT + 1;
          app.listen(alternativePort, () => {
            console.log(`Server running on alternative port ${alternativePort}`);
            console.log(`Access the application at http://localhost:${alternativePort}`);
          });
        } else {
          console.error('Failed to start server:', err);
          process.exit(1);
        }
      })
      .on('listening', () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Access the application at http://localhost:${PORT}`);
      });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
