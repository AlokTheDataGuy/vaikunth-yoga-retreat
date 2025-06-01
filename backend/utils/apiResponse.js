// Utility functions for consistent API responses

/**
 * Send a successful response
 * @param {Object} res - Express response object
 * @param {*} data - Data to send in response
 * @param {number} statusCode - HTTP status code (default: 200)
 * @param {string} message - Optional message
 */
const sendResponse = (res, data, statusCode = 200, message = 'Success') => {
  const response = {
    success: true,
    message,
    data
  };

  // If data is a string, treat it as message
  if (typeof data === 'string') {
    response.message = data;
    delete response.data;
  }

  // If data has a message property, use it
  if (data && typeof data === 'object' && data.message) {
    response.message = data.message;
    if (Object.keys(data).length === 1) {
      delete response.data;
    }
  }

  return res.status(statusCode).json(response);
};

/**
 * Send an error response
 * @param {Object} res - Express response object
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code (default: 500)
 * @param {*} error - Optional error details (only in development)
 */
const sendError = (res, message = 'Internal Server Error', statusCode = 500, error = null) => {
  const response = {
    success: false,
    message
  };

  // Include error details only in development
  if (process.env.NODE_ENV !== 'production' && error) {
    response.error = error;
  }

  return res.status(statusCode).json(response);
};

/**
 * Send a paginated response
 * @param {Object} res - Express response object
 * @param {Array} data - Array of data items
 * @param {Object} pagination - Pagination info
 * @param {string} message - Optional message
 */
const sendPaginatedResponse = (res, data, pagination, message = 'Success') => {
  const response = {
    success: true,
    message,
    data,
    pagination: {
      page: pagination.page || 1,
      limit: pagination.limit || 10,
      total: pagination.total || data.length,
      pages: pagination.pages || Math.ceil((pagination.total || data.length) / (pagination.limit || 10))
    }
  };

  return res.status(200).json(response);
};

/**
 * Send a validation error response
 * @param {Object} res - Express response object
 * @param {Array|Object} errors - Validation errors
 */
const sendValidationError = (res, errors) => {
  const response = {
    success: false,
    message: 'Validation failed',
    errors: Array.isArray(errors) ? errors : [errors]
  };

  return res.status(400).json(response);
};

module.exports = {
  sendResponse,
  sendError,
  sendPaginatedResponse,
  sendValidationError
};