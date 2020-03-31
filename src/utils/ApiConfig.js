import axios from "axios";

// Get environment set variables
const url = process.env.REACT_APP_BASE_URL;

// Config axios base url
const api = axios.create({
  baseURL: url
});

export default api;
