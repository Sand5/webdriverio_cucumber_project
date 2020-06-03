import { Given } from "cucumber";
import gotToURL from "../../support/action/gotToURL";
import homePage from "../../pages/Home";
import gotToPage from "../../support/action/gotToPage";

Given("A web browser is at the Google home page", () => {
  //browser.url("/");
  gotToURL(homePage.url);
});

Given(/^the browser is at the "(Home)" page$/,page => {
  gotToPage(page);
});
