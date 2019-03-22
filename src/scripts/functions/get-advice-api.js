// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const hasResult = (obj, cb) => {
  const max = parseInt(obj.total_results);
  const idNum = max === NaN ? 0 : Math.floor(Math.random() * Math.floor(max));
  cb(obj.slips[idNum].advice);
}

const randomResult = (obj, cb) => {
  cb(obj.slip.advice);
}

const noResult = (string, cb) => {
  const url = "https://api.adviceslip.com/advice";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrObj = JSON.parse(xhr.responseText);
      const result = xhrObj.slip.advice;
      cb(`No thoughts on ${string}, I have... but hear someone say once, I did: ${result}`);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

const getAdvice = (string, cb) => {
  const url =
    string.length === 0
      ? "https://api.adviceslip.com/advice"
      : `https://api.adviceslip.com/advice/search/${string}`;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrObj = JSON.parse(xhr.responseText);
      if (xhrObj.hasOwnProperty("message")) {
        noResult(string, cb);
      } else if (xhrObj.hasOwnProperty("total_results")) {
        hasResult(xhrObj, cb);
      } else {
        randomResult(xhrObj, cb);
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
