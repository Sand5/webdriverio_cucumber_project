//import assert from "assert";

/**
 * @param {boolen} title - The expected title true or false
 *
 */
export default (title) => {
  let pagetitle = browser.getTitle();
  assert(pagetitle === title, `Title, ${pagetitle} not equal to ${title}`);
};
