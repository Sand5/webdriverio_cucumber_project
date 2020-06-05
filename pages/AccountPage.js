class AccountPage {
  get signOutButton() {
    return $("//*[contains(text() ,'Sign out')]");
  }
   
}

export default new AccountPage();
