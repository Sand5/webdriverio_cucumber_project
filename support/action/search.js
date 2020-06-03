import homePage from "../../pages/Home";

/**
 * Search for a keyword
 *
 * @param {String} keyword keyword to search for
 * @param {object} inputField WebdriverIO input field element
 * @param {object} submitButton WebdriverIO submit button element
 */
export default (keyword) => {
  /*
  inputField.waitForDisplayed(5000);
  inputField.click();
  inputField.setValue(keyword);
  submitButton.waitForDisplayed(5000);
  submitButton.click();
  */
 homePage.search(keyword);

};
