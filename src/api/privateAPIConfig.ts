// import getFBToken from "../@firebase/getFBToken";
import axios from "axios";
import { HOST } from "./host";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || HOST;

const api = axios.create({
  baseURL: `${SERVER_URL}/api/private`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   async function (config) {
//     const appToken = await getFBToken();
//     config.headers.AuthToken = appToken;
//     return config;
//   },
//   function (error) {
//     console.warn(error);
//     return Promise.reject(error);
//   }
// );

export default api;
