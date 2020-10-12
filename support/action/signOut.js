import signout from "../../pages/AccountPage";

export default () => {
  if (browser.getTitle() === "My account - My Store") {
    signout.signOutButton.waitForDisplayed(3000);
    signout.signOutButton.click();
  } else {
    console.log("No sign out button to click");
  }
};
