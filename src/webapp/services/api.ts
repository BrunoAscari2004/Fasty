import axios from "axios";

const api = axios.create({
  baseURL: "https://fastyBruno.com/api/",
});

export default api;
