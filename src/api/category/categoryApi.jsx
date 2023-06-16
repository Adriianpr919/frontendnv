import axios from 'axios';

export const categoryApi = axios.create({
  baseURL: '/api/category'
});