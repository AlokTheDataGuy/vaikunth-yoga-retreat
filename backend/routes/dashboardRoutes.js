const express = require('express');
const {
  getDashboardData,
  getBookingStats,
  getFinancialSummary,
  getActivityFeed
} = require('../controllers/dashboardController');

// Middleware
const { protect } = require('../middlewares/auth');

const router = express.Router();

// All dashboard routes are protected
router.use(protect);

// Get dashboard data
router.get('/', getDashboardData);

// Get booking statistics
router.get('/booking-stats', getBookingStats);

// Get financial summary
router.get('/financial-summary', getFinancialSummary);

// Get activity feed
router.get('/activity', getActivityFeed);

module.exports = router;
