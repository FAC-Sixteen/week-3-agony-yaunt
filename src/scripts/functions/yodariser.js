// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function prepareAdvice(string) {

//     var quote = string.replace(/\s/g, "%20");
//     var url = `http://yoda-api.appspot.com/api/v1/yodish?text=${quote}`;
//     return url;
// }

function yodariseAdvice(string) {
  var quote = string.replace(/\s/g, "%20");
  var url = `http://yoda-api.appspot.com/api/v1/yodish?text=${quote}`;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let yodish = document.querySelector(".yodish");

      let yodishObject = xhr.responseText;
      console.log(yodishObject);

      let yodishString = JSON.parse(yodishObject).yodish;
      console.log(yodishString);

      yodish.textContent = yodishString;
      console.log(yodish.textContent);
    }
  };
  xhr.open("GET", `https://cors-anywhere.herokuapp.com/${url}`);
  xhr.send();
}

// module.exports = yodariseAdvice;
// export default yodariseAdvice;
