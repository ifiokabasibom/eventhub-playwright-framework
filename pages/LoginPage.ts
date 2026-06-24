// TODO: LoginPage implementation
import { expect, Page } from "@playwright/test";
import type { Page as PlaywrightPage } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

  emailInput;
  passwordInput;
  loginButton;
  registerText;
  swaggerLink;


  constructor(page: Page) {
    super(page);

    this.emailInput = page.locator("input[type='email']");
    this.passwordInput = page.locator("input[type='password']");
    this.loginButton = page.locator("button[type='submit']");
    this.registerText = page.locator("a[href='/register']");
    this.swaggerLink = page.locator('a[href="https://api.eventhub.rahulshettyacademy.com/api/docs"]');

    
  }

  async goto(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async loginScreenItems(){
    if(expect(this.registerText.isVisible())){
      console.log ("Register Button is Visible")
    };

    if(!expect(this.swaggerLink.isVisible())){
      console.log ("SwggerLink is not Visible")
    };

  }

  //Actual Login Actual
  async login(email: string, password: string) {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  
}