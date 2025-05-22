import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://681a0e561ac1155635079e43.mockapi.io/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
