Feature: Sign in
  As a registered user
  I want to sign in my account

  Background: Set credentials of registered user
    Given User admin credentials

  Scenario: Signing in using existing account
    Given User on Auth page
    Then Auth form is displayed
    When User provides self credentials
    Then User gets on Private page
