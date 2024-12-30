import { BasePage } from "../../core/basePage";

export class HomePage extends BasePage {

    async navigate(page: string) {
        await this.page.goto(page);
    }
}