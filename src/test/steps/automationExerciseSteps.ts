import { Before, Given, Then, When } from '@cucumber/cucumber';
import { pageFixture } from "../../core/pageFixture";
import { HomePage } from '../pages/homePage';
import { expect } from '@playwright/test';

let homePage: HomePage;

// Initialize HomePage before each scenario
Before(async function () {
    homePage = new HomePage(pageFixture.page);
});

Given('I navigate to {string}', async function (page : string) {
    homePage = new HomePage(pageFixture.page);
    await homePage.navigate(page);
});

Then('I verify Home Page is visible', async function () {
    homePage = new HomePage(pageFixture.page);
    await homePage.isLoaded();
});

When('I click on {string}', async function (element : string) {
    await pageFixture.page.getByText(element).click();
});

Then('I verify {string} is visible', async function (element : string) {
    await expect(pageFixture.page.getByText(element)).toBeVisible();
});

When('I enter {string} as email and {string} as password', async function (email : string, password: string) {
    await pageFixture.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await pageFixture.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
    await pageFixture.page.getByPlaceholder('Password').click();
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

When('I click {string} button', async function (text : string) {
    await pageFixture.page.getByRole('button', { name: text }).click();
});
