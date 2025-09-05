import axios from 'axios';

export const apiService = axios.create({
  baseURL: 'https://hr-set2-server-phi.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});
