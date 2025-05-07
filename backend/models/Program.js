const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Program title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  subtitle: {
    type: String,
    trim: true,
    maxlength: [200, 'Subtitle cannot be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Program description is required'],
    trim: true
  },
  image: {
    type: String,
    default: '/assets/images/programs/default.jpg'
  },
  duration: {
    type: String,
    required: [true, 'Program duration is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Program category is required'],
    enum: [
      'yoga-retreat',
      'meditation-retreat',
      'teacher-training',
      'ayurveda-retreat',
      'wellness-retreat',
      'spiritual-retreat',
      'detox-retreat',
      'other'
    ]
  },
  level: {
    type: String,
    required: [true, 'Program level is required'],
    enum: ['beginner', 'intermediate', 'advanced', 'all-levels']
  },
  price: {
    type: String,
    required: [true, 'Program price is required'],
    trim: true
  },
  startDate: {
    type: Date,
    required: [true, 'Program start date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'Program end date is required']
  },
  capacity: {
    type: Number,
    required: [true, 'Program capacity is required'],
    min: [1, 'Capacity must be at least 1']
  },
  highlights: {
    type: [String],
    default: []
  },
  includes: {
    type: [String],
    default: []
  },
  excludes: {
    type: [String],
    default: []
  },
  schedule: {
    type: [
      {
        time: String,
        activity: String
      }
    ],
    default: []
  },
  instructors: {
    type: [
      {
        name: String,
        bio: String,
        image: String
      }
    ],
    default: []
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Program', ProgramSchema);