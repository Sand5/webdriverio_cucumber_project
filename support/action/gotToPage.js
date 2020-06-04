import home from "../../pages/HomePage";
import login from "../../pages/LoginPage";

export default (page) => {
  switch (page) {
    case "Home":
      browser.url(home.url);
      break;
    case "Login":
      browser.url(login.url);
      break;
    default:
      console.log(`Invalid Page + ${page}`);
  }
};
