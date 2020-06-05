import { Then } from "cucumber";
import checkLoginError from "../../support/asserstions/checkTheErrorMessage";


Then(/^the error message shown should contain "(.*)"$/,error => {
     checkLoginError(error);
});