import axios from "axios";
import { Platform } from "react-native";

// 1. Run 'ipconfig' in your CMD and put your current IPv4 here
const LAPTOP_WIFI_IP = "192.168.145.151"; 

const getBaseUrl = () => {
  // If you are running on an Android Emulator
  if (Platform.OS === 'android' && !Platform.isPad) {
    // 10.0.2.2 is the special tunnel to your laptop's localhost
    return `http://10.0.2.2:5000/api`;
  }
  
  // If it's a physical phone (Android or iOS)
  return `http://${LAPTOP_WIFI_IP}:5000/api`;
};

const API = axios.create({
<<<<<<< HEAD
  baseURL: "http://192.168.115.151:5000/api",
=======
  baseURL: getBaseUrl(),
  timeout: 10000,
>>>>>>> 42e4367 (Rename frontend folder to admin-web)
});

export default API;