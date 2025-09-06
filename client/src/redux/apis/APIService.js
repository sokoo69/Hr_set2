import axios from 'axios';

// Updated to use Heroku server URL
export const apiService = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? "https://hr-management-system-shawon-04fce1431e33.herokuapp.com" 
    : "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json',
  },
});
