import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ENV } from "../utils/env";

setup("authenticate", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto(
        ENV.baseUrl
    );

    await loginPage.login(
        ENV.username,
        ENV.password
    );

    await page.context().storageState({
        path: "auth/user.json"
    });
});