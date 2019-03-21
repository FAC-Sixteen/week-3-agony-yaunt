// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function hasResult(obj, cb) {
  const max = parseInt(obj.total_results);
  const idNum = max === NaN ? 0 : Math.floor(Math.random() * Math.floor(max));
  // console.log(obj.slips[idNum].advice);
  cb(obj.slips[idNum].advice);
}

function randomResult(obj, cb) {
  // console.log(obj.slip.advice);
  cb(obj.slip.advice);
}

function noResult(string, cb) {
  let url = "https://api.adviceslip.com/advice";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrObj = JSON.parse(xhr.responseText);
      const result = xhrObj.slip.advice;
      cb(result);
      console.log(
        `No thoughts on ${string}, I have... but hear someone say once, I did: ${result}`
      );
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getAdvice(string, cb) {
  let url =
    string.length === 0
      ? "https://api.adviceslip.com/advice"
      : `https://api.adviceslip.com/advice/search/${string}`;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrObj = JSON.parse(xhr.responseText);
      if (xhrObj.hasOwnProperty("message")) {
        noResult(string, cb);
      } else if (xhrObj.hasOwnProperty("total_results")) {
        hasResult(xhrObj, cb);
      } else {
        randomResult(string, cb);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// module.exports = getAdvice;

// getAdvice("");
// getAdvice("cloud");
// getAdvice("cats");
// getAdvice("hand");
// getAdvice("love");
// getAdvice("heart");
