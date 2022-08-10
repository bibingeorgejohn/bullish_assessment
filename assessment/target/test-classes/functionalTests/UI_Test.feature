Feature: WEBUI Test

Description: The purpose of these tests are to cover WEBUI Test of herokuapp.com.

URL : http://the-internet.herokuapp.com/

Scenario: Navigate to http://the-internet.herokuapp.com, click on ‘Form Authentication’ and test the login feature available in that website using Cucumbertest scripts, BDD approach. Generate a suitable reporting system to present the results/identify issues in the application/tests.
Given The portal "http://the-internet.herokuapp.com/" is accessible
When I open the web-site "http://the-internet.herokuapp.com/"
And Navigate to "Form Authentication"
Then I should see the "Login Page"
And I enter the user name as "tomsmith" and password as "SuperSecretPassword!"
And I click on the "Login" button
Then I should see the "Secure Area" page
And I should see the text "Welcome to the Secure Area. When you are done click logout below."
And I should see the "Logout" button