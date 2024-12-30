import { Given, Then, When } from '@cucumber/cucumber';
import assert from "assert";
import { pageFixture } from "../../core/pageFixture";
import { HomePage } from '../pages/homePage';

let homePage: HomePage;

Given('I navigate to {string}', async function (page : string) {
    homePage = new HomePage(pageFixture.page);
    await homePage.navigate(page);
});