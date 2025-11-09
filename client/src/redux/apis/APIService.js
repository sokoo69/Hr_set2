import axios from 'axios';

// Use relative URLs in production (same domain) or localhost in development
export const apiService = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? "" // Use relative URLs when frontend and backend are on same domain
    : "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
});

// Add response interceptor for better error handling
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log error for debugging
    if (error.response) {
      // Server responded with error status
      console.error('API Error Response:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url
      });
    } else if (error.request) {
      // Request made but no response received
      console.error('API Network Error:', {
        message: error.message,
        url: error.config?.url
      });
    } else {
      // Error setting up request
      console.error('API Request Setup Error:', error.message);
    }
    return Promise.reject(error);
  }
);
