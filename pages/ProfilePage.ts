// TODO: ProfilePage implementation
import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async openProfile() {

    const profileButton =
      this.page.locator("text=Profile");

    await profileButton.click();
  }
}