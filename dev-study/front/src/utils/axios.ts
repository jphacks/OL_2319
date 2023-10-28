import axios from "axios";

export const apiEndpoint = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
