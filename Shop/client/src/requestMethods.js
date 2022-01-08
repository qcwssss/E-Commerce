import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

const BASE_URL = "http://localhost:5000/api";

const TOKEN = process.env.TOKEN;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
