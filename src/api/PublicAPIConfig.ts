import axios from "axios";
import { HOST } from "./host";

const publicAPi = axios.create({
  baseURL: `${HOST}/api`,
  timeout: 45000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default publicAPi;
