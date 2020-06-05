import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { selectToken } from './user/user-selectors';


const token = createStructuredSelector({
  token: selectToken
});


const axiosInstance = axios.create({
  baseURL: 'https://baseUrl.com',
  headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer${token}`;
  return config;
}, (error) => Promise.reject(error));


export default axiosInstance;
