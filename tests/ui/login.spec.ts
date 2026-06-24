// TODO: Login UI test
import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { ENV } from "../../utils/env";

test("Swagger and Registration Links Are Present", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(ENV.baseUrl);
  await loginPage.loginScreenItems();
});

test("Login screen matches the screenshot base-line", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(ENV.baseUrl);
  await loginPage.takeScreenshot("login-page");
});

test("User should login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto(ENV.baseUrl);
  await loginPage.login(ENV.username, ENV.password);
  await dashboardPage.verifyUserLoggedIn();
});
