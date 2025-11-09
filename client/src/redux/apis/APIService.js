import axios from 'axios';

// Use relative URLs in production (same domain) or localhost in development
export const apiService = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? "" // Use relative URLs when frontend and backend are on same domain
    : "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json',
  },
});
