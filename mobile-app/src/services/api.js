import axios from "axios";

const API = axios.create({
  baseURL: "http://10.114.254.244:5000/api",
});

export default API;
