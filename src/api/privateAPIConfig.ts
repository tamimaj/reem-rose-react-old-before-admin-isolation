import getFBToken from "../firebase/getFBToken";
import axios from "axios";
import { HOST } from "./host";

const api = axios.create({
  baseURL: `${HOST}/api/private`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async function (config) {
    const appToken = await getFBToken();
    config.headers.AuthToken = appToken;
    return config;
  },
  function (error) {
    console.warn(error);
    return Promise.reject(error);
  }
);

export default api;
