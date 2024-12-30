import { expect } from "@playwright/test";
import { BasePage } from "../../core/basePage";

export class HomePage extends BasePage {
    async isLoaded() {
        await expect(this.page.locator('#slider')).toBeVisible();
    }

    async navigate(page: string) {
        await this.page.goto(page);
    }

    async addProductToCart(index: number) {
        // Use nth-child to target a specific product overlay
        const productOverlaySelector = `.product-overlay:nth-of-type(${index})`;
        const addToCartButtonSelector = `${productOverlaySelector} .overlay-content > .btn`;
    
        // Hover over the product overlay
        await this.page.locator(productOverlaySelector).hover();
    
        // Click the "Add to cart" button
        await this.page.locator(addToCartButtonSelector).click();
    }
}