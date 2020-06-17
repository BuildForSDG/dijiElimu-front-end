import axios from 'axios';

const token = localStorage.getItem('token')


const axiosInstance = axios.create({
  baseURL: 'https://diji-elimu.herokuapp.com',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

// axiosInstance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// }, (error) => Promise.reject(error));


export default axiosInstance;
