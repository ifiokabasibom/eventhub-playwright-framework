// TODO: DashboardPage implementation
import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async verifyUserLoggedIn() {

    await expect(this.page).not.toHaveURL(/login/i);

    await expect(this.page).toHaveURL(/.*eventhub.*/);
  }

  async currentUrl() {
    return this.page.url();
  }
}