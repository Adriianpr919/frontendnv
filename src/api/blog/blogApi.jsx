import axios from 'axios';

export const blogApi = axios.create({
  baseURL: '/api/blogs'
});