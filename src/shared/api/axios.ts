import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': '7fbe960e-1440-402f-95fe-4d35d179ec0d'
  }
})