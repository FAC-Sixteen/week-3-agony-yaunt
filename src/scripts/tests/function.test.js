const test = require("tape");
const getAdviceApi = require("../functions/get-advice-api.js");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

test("Test advice function", t => {
  const actual = getAdviceApi("");
  const expected = "string";
  t.equal(actual, expected, "function should fetch a string from the api");
  t.end();
});
