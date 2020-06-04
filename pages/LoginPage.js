class LoginPage {
  
    get url() {
    return "?controller=authentication";
  }

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
     return $("#passwd");
  }

  get signInButton() {
     return $("#SubmitLogin");
  }

  /**
   * Signs In
   * @param {String} email
   * @param {String} password
   */

   signIn(email,password) {

    this.emailInput.waitForDisplayed(5000);
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.signInButton.click();
    //this.emailInput.setValue(email);

   }

}

export default new LoginPage();