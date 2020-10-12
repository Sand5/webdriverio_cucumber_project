class CatalogPage {
  get resultErrorMessage() {
    return $(".alert.alert-warning");
  }


  get products() {
    return $$(
      "#search .product_list .product-container .product-image-container"
    );
  }
}

export default new CatalogPage();
