import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Contact API services
export const contactService = {
  // Submit contact form
  submitContactForm: async (formData) => {
    try {
      const response = await api.post('/contact', formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Subscribe to newsletter (would be implemented in a real app)
  subscribeToNewsletter: async (email) => {
    try {
      const response = await api.post('/newsletter', { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Programs API services
export const programService = {
  // Get all programs
  getAllPrograms: async () => {
    try {
      const response = await api.get('/programs');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get program by ID
  getProgramById: async (id) => {
    try {
      const response = await api.get(`/programs/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get featured programs
  getFeaturedPrograms: async () => {
    try {
      const response = await api.get('/programs/featured');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Accommodations API services
export const accommodationService = {
  // Get all accommodations
  getAllAccommodations: async () => {
    try {
      const response = await api.get('/accommodations');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get accommodation by ID
  getAccommodationById: async (id) => {
    try {
      const response = await api.get(`/accommodations/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Booking API services
export const bookingService = {
  // Create a new booking
  createBooking: async (bookingData) => {
    try {
      const response = await api.post('/bookings', bookingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Check availability
  checkAvailability: async (params) => {
    try {
      const response = await api.get('/bookings/availability', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get upcoming programs with availability
  getUpcomingPrograms: async () => {
    try {
      const response = await api.get('/bookings/upcoming-programs');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user bookings
  getUserBookings: async () => {
    try {
      const response = await api.get('/bookings/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get booking by ID
  getBookingById: async (id) => {
    try {
      const response = await api.get(`/bookings/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Cancel booking
  cancelBooking: async (id, reason) => {
    try {
      const response = await api.put(`/bookings/${id}/cancel`, { cancellationReason: reason });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Testimonials API services
export const testimonialService = {
  // Get all testimonials
  getAllTestimonials: async () => {
    try {
      const response = await api.get('/testimonials');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Blog API services
export const blogService = {
  // Get all blog posts
  getAllPosts: async () => {
    try {
      const response = await api.get('/blog');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get blog post by ID
  getPostById: async (id) => {
    try {
      const response = await api.get(`/blog/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// User API services
export const userService = {
  // Register a new user
  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/users/login', credentials);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user profile
  getProfile: async () => {
    try {
      const response = await api.get('/users/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update user profile
  updateProfile: async (profileData) => {
    try {
      const response = await api.put('/users/me', profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update password
  updatePassword: async (passwordData) => {
    try {
      const response = await api.put('/users/updatepassword', passwordData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return localStorage.getItem('token') ? true : false;
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

// Dashboard API services
export const dashboardService = {
  // Get dashboard data
  getDashboardData: async () => {
    try {
      const response = await api.get('/dashboard');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get booking statistics
  getBookingStats: async () => {
    try {
      const response = await api.get('/dashboard/booking-stats');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get financial summary
  getFinancialSummary: async () => {
    try {
      const response = await api.get('/dashboard/financial-summary');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get activity feed
  getActivityFeed: async () => {
    try {
      const response = await api.get('/dashboard/activity');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Export the API instance for other services
export default api;
