Feature:Login
   As a user,I want to be able to login to my account to view account details

   
   Scenario Outline: Attempting to login with vaild credentials;
      Given the browser is at the "Login" page
      When the user tries to use vaild credentials,"<email>" to login
      Then the title of the page should be "My account - My Store"
      @regression
      Examples:
      |email          |
      |frame@gmail.com|                                                           
      |frame@gmail.com|



      Scenario Outline: Attempting to login with invaild credentials;
      Given the browser is at the "Login" page
      When the user tries to use vaild credentials,"<email>" to login
      Then the title of the page should be "Login - My Store"
      And the error message shown should contain "There is 1 error"
      @regression
      Examples:
      |email            |
      |123_dev@gamil.com|                         
    
