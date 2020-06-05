import home from "../../pages/HomePage";

/**
 * @param {String} error_message -Expected error message
 * 
 */

 export default (error_message) => {
     let error = home.loginError.getText();
     assert(error === error_message,`Error, ${error} not equal to ${error_message}`);
 }

