import CatalogPage from "../../pages/CatalogPage";
//import assert from "assert";

export default () => {
  const noResultsErrorMessage = CatalogPage.resultErrorMessage;

  assert(
    noResultsErrorMessage
      .getText()
      .includes("No results were found for your search"),
    "No results error message was not found"
  );
};
