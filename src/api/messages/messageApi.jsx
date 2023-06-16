import axios from 'axios';

export const messageApi = axios.create({
  baseURL: '/api/messagesopcions'
});