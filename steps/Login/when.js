import {When} from "cucumber";
import sigin from "../../support/action/signIn"


When(/^the user tries to use vaild credentials,"(.*)" to login$/,email => {
   sigin(email);
});
