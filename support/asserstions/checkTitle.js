//import assert from "assert";


/**
 * @param {boolen} title - The expected title true or false
 *
 */
export default (title) => {
  browser.pause(2500);
  let pagetitle = browser.getTitle();
  assert(pagetitle === title, `Title, ${pagetitle} not equal to ${title}`);
};
