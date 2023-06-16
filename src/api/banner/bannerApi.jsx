import axios from 'axios';

export const bannerApi = axios.create({
  baseURL: '/api/banners'
});