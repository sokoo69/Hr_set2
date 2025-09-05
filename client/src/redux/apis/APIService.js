import axios from 'axios';

// Updated to use Vercel server URL
export const apiService = axios.create({
  baseURL: 'https://hr-set2-server.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});
