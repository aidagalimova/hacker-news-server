import axios from "axios";

const api = process.env.NODE_APP_API || "https://api.hnpwa.com/v0/";

const axiosInstance = axios.create({
  baseURL: api,
});

export default axiosInstance;
