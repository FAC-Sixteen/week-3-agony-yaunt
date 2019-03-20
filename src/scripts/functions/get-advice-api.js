var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function hasResult(obj) {
  const max = parseInt(obj.total_results);
  const idNum = max === NaN ? 0 : Math.floor(Math.random() * Math.floor(max));
  console.log(obj.slips[idNum].advice);
  return obj.slips[idNum].advice;
}

function randomResult(obj) {
  console.log(obj.slip.advice);
  return obj.slip.advice;
}

function noResult(string) {
  let url = "https://api.adviceslip.com/advice";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrObj = JSON.parse(xhr.responseText);
      const result = xhrObj.slip.advice;

      console.log(
        `No thoughts on ${string}, I have... but hear someone say once, I did: ${result}`
      );
      return `No thoughts on ${string}, I have... but hear someone say once, I did: ${result}`;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();

  // getAdvice;
  // let newAdvice = function(cb) {
  //   return cb("");
  // };
  // console.log({ newAdvice });
  // console.log(
  //   `No thoughts on ${string}, I have... but hear someone say once, I did: ${newAdvice(
  //     getAdvice
  //   )}`
  // );
  // return `No thoughts on ${string}, I have... but hear someone say once, I did: ${newAdvice(
  //   getAdvice
  // )}`;
}

function getAdvice(string) {
  let url =
    string.length === 0
      ? "https://api.adviceslip.com/advice"
      : `https://api.adviceslip.com/advice/search/${string}`;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrObj = JSON.parse(xhr.responseText);
      if (xhrObj.hasOwnProperty("message")) {
        noResult(string);
      } else if (xhrObj.hasOwnProperty("total_results")) {
        hasResult(xhrObj);
      } else {
        randomResult(xhrObj, string);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

module.exports = getAdvice;
// getAdvice("");
// getAdvice("cloud");
// getAdvice("cats");
// getAdvice("hand");
// getAdvice("love");
getAdvice("heart");
