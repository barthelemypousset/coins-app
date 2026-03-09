import axios from "axios";

export const apiDelta = axios.create({
  baseURL: "https://api.getdelta.io/web",
  timeout: 5000, // 5sec
});