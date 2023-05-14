import axios from "axios";
import { HOST } from "./host";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || HOST;

const publicAPi = axios.create({
  baseURL: `${SERVER_URL}/api`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default publicAPi;
