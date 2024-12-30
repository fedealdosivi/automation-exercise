
Feature: Cart

    Scenario: Test Case 12: Add Products in Cart
        Given I navigate to "https://automationexercise.com/"
        Then I verify Home Page is visible
        When I click on ' Products'
        And I hover over 1 product and I add it to the cart
        And I click 'Continue Shopping' button
        And I hover over 2 product and I add it to the cart
        And I click on 'View Cart'
        Then I verify there are 2 products added to Cart
        And I verify the price, quantity, and total for each product in the Cart

    Scenario: Test Case 13: Verify Product quantity in Cart
        Given I navigate to "https://automationexercise.com/"
        Then I verify Home Page is visible
        When I click "View Product" for product number 1 on the home page
        Then I verify product detail is opened
        When I increase quantity to 4
        And I click ' Add to cart' button
        And I click on 'View Cart'
        Then I verify that the product with quantity 4 is visible


