@smoke
Feature: Login

    Scenario: Test Case 3: Login User with incorrect email and password
        Given I navigate to "https://automationexercise.com/"
        Then I verify Home Page is visible
        And I click on ' Signup / Login'
        Then I verify 'Login to your account' is visible
        When I enter 'incorrect@email' as email and 'incorrectpw' as password
        And I click 'login' button
        Then I verify 'Your email or password is incorrect!' is visible
