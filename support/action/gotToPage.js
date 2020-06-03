import home from "../../pages/HomePage"

export default (page) => {
  switch (page) {
    case "Home":
      browser.url(home.url);
      break;
    default:
      console.log(`Invalid Page + ${page}`);
  }
};
