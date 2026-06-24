// TODO: Dashboard UI test
import { test } from "@playwright/test";
import { login } from "../../helpers/authHelper";

test.describe("Dashboard", () => {

  test("Dashboard should load", async ({ page }) => {

    await login(page);

    await page.waitForLoadState(
      "networkidle"
    );
  });
});