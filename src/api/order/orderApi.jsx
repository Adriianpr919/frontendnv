import axios from 'axios';

export const orderApi = axios.create({
  baseURL: '/api/orders'
});