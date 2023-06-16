import axios from 'axios';

export const aboutApi = axios.create({
  baseURL: '/api/abouts'
});