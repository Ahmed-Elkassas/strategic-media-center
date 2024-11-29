import axios from "axios";
import { redirect } from "@/i18n/routing";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// Request Interceptor
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle token expiration
      localStorage.removeItem("token");
      if (typeof window !== undefined) {
        redirect({ href: "/ar/login", locale: "auto" });
      }
    }
    return Promise.reject(error);
  }
);
