import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mobile-store-management-server.vercel.app'
});
