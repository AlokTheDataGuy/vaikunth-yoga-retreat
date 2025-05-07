const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Accommodation name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Accommodation description is required'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Accommodation type is required'],
    enum: ['private-room', 'shared-room', 'dormitory', 'cottage', 'tent', 'other'],
    default: 'private-room'
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    min: [1, 'Capacity must be at least 1']
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Price per night is required'],
    min: [0, 'Price cannot be negative']
  },
  images: {
    type: [String],
    default: ['/assets/images/accommodations/default.jpg']
  },
  amenities: {
    type: [String],
    default: []
  },
  features: {
    type: [
      {
        icon: String,
        name: String,
        description: String
      }
    ],
    default: []
  },
  totalUnits: {
    type: Number,
    required: [true, 'Total units is required'],
    min: [1, 'Total units must be at least 1']
  },
  availableUnits: {
    type: Number,
    required: [true, 'Available units is required'],
    min: [0, 'Available units cannot be negative']
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

module.exports = mongoose.model('Accommodation', AccommodationSchema);