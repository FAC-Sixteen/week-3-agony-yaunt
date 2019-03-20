const test = require('tape');
const yodariser = require('../functions/yodariser.js');
const getAdviceApi = require("../functions/get-advice-api.js");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const dummyAdvice = "Burn the spreadsheets";
const dummyAdvice2 = "Learn today, teach tomorrow";

test("Testing yodariser", function (t) {
    const actual = 1;
    const expected = 1;
    t.equal(actual, expected, "Tape is working!");
    t.end();
});

// test("Function returns formatted quote", function(t) {
//     const actual = yodariser(dummyAdvice);
//     const expected = "Burn%20the%20spreadsheets";
//     t.equal(actual,expected, "Quote is formatted");
//     t.end();
// });

test("Yodarise function returns a url", function(t) {
    const actual = yodariser(dummyAdvice);
    const expected = "http://yoda-api.appspot.com/api/v1/yodish?text=Burn%20the%20spreadsheets";
    t.equal(actual,expected, "Quote is formatted");
    t.end();
});

test("Test advice function", t => {
  const actual = getAdviceApi("");
  const expected = "string";
  t.equal(actual, expected, "function should fetch a string from the api");
  t.end();
});
