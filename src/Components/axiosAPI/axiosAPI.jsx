import axios from "axios";

const FAKE_API_URL = "https://fakestoreapi.com/products";

export const axiosAPI = axios.create({
  baseURL: FAKE_API_URL,
});
