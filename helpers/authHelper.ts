// TODO: Auth helper
import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ENV } from "../utils/env";

export async function login(
  page: Page
) {

  const loginPage = new LoginPage(page);

  await loginPage.goto(
    ENV.baseUrl
  );

  console.log("USERNAME =", ENV.username);
  await loginPage.login(
    ENV.username,
    ENV.password
  );
}