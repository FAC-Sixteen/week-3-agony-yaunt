// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function yodariseAdvice(string) {
  

  var errorMessage = string.match(/.*did:/gi);
  console.log(errorMessage);

  var errorMessageRemoved = string.replace(/.*did:/gi, "");

  var apiReadyQuote = errorMessageRemoved.replace(/\s/g, "%20");

  var url = `http://yoda-api.appspot.com/api/v1/yodish?text=${apiReadyQuote}`;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let yodish = document.querySelector(".yodish");

      let yodishObject = xhr.responseText;
      console.log(yodishObject);

      let yodishString = JSON.parse(yodishObject).yodish;
      console.log(yodishString);

      if (errorMessage) {
        yodishString = `${errorMessage} ${yodishString}`;
      }
    
      yodish.textContent = yodishString;
      console.log(yodish.textContent);
    }
  };
  xhr.open("GET", `https://cors-anywhere.herokuapp.com/${url}`);
  xhr.send();
}


// module.exports = yodariseAdvice;
// export default yodariseAdvice;
