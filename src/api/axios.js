import axios from "axios";

export const API = axios.create({
  baseURL: "http://dgu-yadan.site/",
  // baseURL: "http://175.45.200.133/",
  // baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
