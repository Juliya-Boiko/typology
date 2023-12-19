import axios from "axios";
import { API_KEYS } from "../../constants/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export const getAllProducts = async ({ tag, limit }) => {
  try {
    const { data } = await axiosInstance.get(`/${API_KEYS.PRODUCTS}?tag=${tag}&limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};