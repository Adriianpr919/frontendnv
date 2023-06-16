import axios from 'axios';

export const tripletecategoryApi = axios.create({
  baseURL: '/api/tripletecategory'
});