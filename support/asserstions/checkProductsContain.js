import catalogPage from "../../pages/CatalogPage";
import assert from "assert";

/**
 * @param {boolean} keyword search the keyword term
 */
export default (keyword) => {
  catalogPage.products.forEach((product) => {
    const productText = product.getText().trim().toLowerCase();

    if (productText) {

        console.log(productText);
      assert(
        productText.includes(keyword),
        `Product ${product.getText()} does not contain ${keyword}`
      );
    }
  });
};
