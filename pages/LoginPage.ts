// TODO: LoginPage implementation
import { Page } from "@playwright/test";
import type { Page as PlaywrightPage } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

  emailInput;
  passwordInput;
  loginButton;

  constructor(page: Page) {
    super(page);

    this.emailInput = page.locator("input[type='email']");
    this.passwordInput = page.locator("input[type='password']");
    this.loginButton = page.locator("button[type='submit']");
  }

  async goto(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async login(email: string, password: string) {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }
}