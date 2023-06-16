import axios from 'axios';

export const subcategoryApi = axios.create({
  baseURL: '/api/subcategory'
});