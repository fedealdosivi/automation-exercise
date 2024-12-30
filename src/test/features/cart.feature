@smoke
Feature: Cart

    Scenario: Test Case 12: Add Products in Cart
        Given I navigate to "https://automationexercise.com/"
        Then I verify 'home page' is visible
        When I click 'Products' button
        And I hover over first product and click 'Add to cart'
        And I click 'Continue Shopping' button
        And I hover over second product and click 'Add to cart'
        And I click 'View Cart' button
        Then I verify both products are added to Cart
        And I verify their prices, quantity and total price

    Scenario: Test Case 13: Verify Product quantity in Cart
        Given I navigate to "https://automationexercise.com/"
        Then I verify 'home page' is visible
        When I click 'View Product' for any product on home page
        Then I verify product detail is opened
        When I increase quantity to 4
        And I click 'Add to cart' button
        And I click 'View Cart' button
        Then I verify that product is displayed in cart page with exact quantity


