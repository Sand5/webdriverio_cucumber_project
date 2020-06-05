import { Then } from "cucumber";
import verifyLinksContain from "../../support/asserstions/verifyLinksContain";
import checkProducts from "../../support/asserstions/checkProducts";
import checkNoResults from "../../support/asserstions/checkNoResults";
import checkProductsContain from "../../support/asserstions/checkProductsContain";
import checkTitle from "../../support/asserstions/checkTitle";
import signOut from "../../support/action/signOut";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
  /* 
 const links = $$(".LC20lb");
  links.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      expect(linkText).contain(keyword);

     
    }
*/
  verifyLinksContain(keyword);
});

Then(/^(no )?products are listed$/, (notListed) => {
  if (notListed) {
    checkProducts(false);
  } else {
    checkProducts(true);
  }
});

Then("a no results error message is shown", () => {
  checkNoResults();
});

Then(/^the search results show products related to "(.*)"$/, (keyword) => {
  checkProductsContain(keyword);
});

Then(/^the title of the page should be "(.*)"$/, (title) => {
  checkTitle(title);
  signOut();
});
