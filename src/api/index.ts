import axios from "axios";

const api = axios.create({
  baseURL: "https://api.bcra.gob.ar",
}); 

export default api;