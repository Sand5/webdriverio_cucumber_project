import { When } from "cucumber";
import search from "../../support/action/search";
import shopsearch from "../../support/action/shopsearch";
import selectMenuOption from "../../support/action/selectMenuOption";

When(/^the user enters "(.*)" into the search bar$/, (keyword) => {
  /*
  $(".gLFyf.gsfi").waitForDisplayed(5000);
  $(".gLFyf.gsfi").click();
  $(".gLFyf.gsfi").setValue(keyword);
   $(".aajZCb .gNO89b").waitForDisplayed(6000);
  $(".aajZCb .gNO89b").click();
*/
  search(keyword);
});

When(/^the user searches for "(.*)"$/, (keyword) => {
  shopsearch(keyword);
});

When(/^the user clicks on the "(.*)" menu option in the menu$/, (option) => {
  selectMenuOption(option);
});
