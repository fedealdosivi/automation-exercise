import { expect } from "@playwright/test";
import { BasePage } from "../../core/basePage";

export class HomePage extends BasePage {
    async isLoaded() {
        await expect(this.page.locator('#slider')).toBeVisible();
    }

    async navigate(page: string) {
        await this.page.goto(page);
    }
}