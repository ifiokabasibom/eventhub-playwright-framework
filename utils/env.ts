// TODO: Env loader
import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  baseUrl: process.env.BASE_URL || "https://eventhub.rahulshettyacademy.com/login",
  username: "ifiokabasibom@gmail.com",
  password: "Password1$",
  headless: process.env.HEADLESS === "true"
};