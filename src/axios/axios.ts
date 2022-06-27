import { getAccessToken } from '@helpers/auth';
import axios from 'axios';

const accessToken = getAccessToken();
export const petgramAPI = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${accessToken || ''}`,
  },
});
