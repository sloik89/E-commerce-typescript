import axios from "axios";
const customUrl = "https://e-commerce-api-otdo.onrender.com/api/";
const customLocalUrl = "/api";
export const customFetch = axios.create({
  baseURL: customLocalUrl,
});
