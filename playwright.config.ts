// TODO: Complete configuration
// - load dotenv
// - baseURL
// - ignoreHTTPSErrors
// - HTML reporter


import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({

  testDir: "./tests",

  timeout: 60000,

  retries: 1,

  reporter: [
    ["html"]
  ],

  use: {

    baseURL: process.env.BASE_URL,

    headless:
      process.env.HEADLESS !== "false",

    screenshot:
      "only-on-failure",

    trace:
      "retain-on-failure",

    video:
      "retain-on-failure",

    ignoreHTTPSErrors: true
  }
});