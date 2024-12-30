import { Before, Given, Then, When } from '@cucumber/cucumber';
import { pageFixture } from "../../core/pageFixture";
import { HomePage } from '../pages/homePage';
import { expect } from '@playwright/test';
import assert from 'assert';

let homePage: HomePage;

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


When('I hover over {int} product and I add it to the cart', async function (productNumber: number) {
    homePage = new HomePage(pageFixture.page);
    await homePage.addProductToCart(productNumber);
});

Then('I verify there are {int} products added to Cart', async function (products: number) {
    // Selector for all products in the cart
    const productsSelector = 'tbody > tr';
    const productCount = await pageFixture.page.locator(productsSelector).count();
    assert.strictEqual(productCount, products, `Expected ${products} products in the cart, but found ${productCount}`);
});

Then('I verify the price, quantity, and total for each product in the Cart', async function () {
    
});

When('I click "View Product" for product number {int} on the home page', async function (productNumber: number) {
    const productSelector = '.choose > .nav > li > a';
    await pageFixture.page.locator(productSelector).nth(productNumber - 1).click();
});

Then('I verify product detail is opened', async function () {
    await pageFixture.page.getByText('Availability:').isVisible();
    await pageFixture.page.getByText('Condition:').isVisible();
    await pageFixture.page.getByText('Brand:').isVisible();
});

When('I increase quantity to {int}', async function (quantity: number) {
    const quantitySelector = '#quantity';
    await pageFixture.page.locator(quantitySelector).fill(quantity.toString());
});

Then('I verify that the product with quantity {int} is visible', async function (quantity: number) {
    await expect(pageFixture.page.getByRole('button', { name: quantity.toString() })).toBeVisible();
});