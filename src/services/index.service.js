import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://681a0e551ac1155635079e39.mockapi.io",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
