const test = require('tape');
const yodariser = require('../functions/yodariser.js');
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

test("Function returns a url", function(t) {
    const actual = yodariser(dummyAdvice);
    const expected = "http://yoda-api.appspot.com/api/v1/yodish?text=Burn%20the%20spreadsheets";
    t.equal(actual,expected, "Quote is formatted");
    t.end();
});

