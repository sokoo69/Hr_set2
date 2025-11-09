import axios from 'axios';

// Determine the correct API base URL
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return "http://localhost:5000";
  }
  
  // In production, check if we're on the client-only domain or the full-stack domain
  const currentHost = window.location.hostname;
  
  // If on client-only domain (hr-set2-client.vercel.app), use the full-stack domain for API
  if (currentHost.includes('hr-set2-client')) {
    return "https://hr-set2.vercel.app";
  }
  
  // If on full-stack domain (hr-set2.vercel.app), use relative URLs
  return "";
};

export const apiService = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
  withCredentials: true, // Always send credentials
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
