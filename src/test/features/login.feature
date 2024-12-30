@smoke
Feature: Login

    Scenario: Test Case 3: Login User with incorrect email and password
        Given I navigate to "https://automationexercise.com/"
        Then I verify 'home page' is visible
        And I click 'Signup / Login' button
        Then I verify 'Login to your account' is visible
        When I enter incorrect email address and password
        And I click 'login' button
        Then I verify 'Your email or password is incorrect!' is visible
