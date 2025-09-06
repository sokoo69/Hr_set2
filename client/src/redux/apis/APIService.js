import axios from 'axios';

// Updated to use Heroku server URL
export const apiService = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? "https://your-heroku-app-name.herokuapp.com" 
    : "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json',
  },
});
