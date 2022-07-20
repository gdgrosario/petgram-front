import { getAccessToken } from "@helpers/auth";
import axios from "axios";

export const petgramAPI = axios.create({
  baseURL: "http://localhost:3000/",
});

petgramAPI.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
