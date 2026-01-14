import axios from "axios";

// Axios instance for backend API
const api = axios.create({
  baseURL: "http://localhost:5000/api", // your Node.js backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
