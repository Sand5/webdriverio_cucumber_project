class Home {
  get url() {
    return "https://www.google.com";
  }

  get searchField() {
    return $(".gLFyf.gsfi");
  }

  get searchButton() {
    return $(".aajZCb .gNO89b");
  }

  search(keyword) {
    this.searchField.waitForDisplayed(5000);
    this.searchField.click();
    this.searchField.setValue(keyword);
    this.searchButton.waitForDisplayed(5000);
    this.searchButton.click();
  }
}

 export default new Home();
