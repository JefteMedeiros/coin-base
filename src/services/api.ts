import axios from "axios";

export const apiService = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/29fa35c9e32661326a29c959"
})
