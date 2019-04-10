// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const yodariseAdvice = (string) => {
  
  const errorMessage = string.match(/.*did:/gi);
  let errorMessageRemoved = string.replace(/.*did:/gi, "");
  let apiReadyQuote = errorMessageRemoved.replace(/\s/g, "%20");

  const url = `http://yoda-api.appspot.com/api/v1/yodish?text=${apiReadyQuote}`;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const yodish = document.querySelector(".advice__yodish");
      const yodishObject = xhr.responseText;
      let yodishString = JSON.parse(yodishObject).yodish;
      if (errorMessage) {
        yodishString = `${errorMessage} ${yodishString}`;
      }
      yodish.textContent = yodishString;
    }
  };
  xhr.open("GET", `https://cors-anywhere.herokuapp.com/${url}`);
  xhr.send();
}


// module.exports = yodariseAdvice;
// export default yodariseAdvice;
