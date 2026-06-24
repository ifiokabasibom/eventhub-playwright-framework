import { Locator, Page, expect } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.waitFor();
        await locator.click();
    }

    async type(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async waitForVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async waitForHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `test-results/${name}.png`,
            fullPage: true
        });
    }
}