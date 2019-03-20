// const yodariser = require("../functions/yodariser.js");
import { yodariseAdvice } from "../functions/yodariser";
// const getAdviceApi = require("../functions/get-advice-api.js");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", e => {
  e.preventDefault;
  console.log(e);
});

console.log(yodariseAdvice("you are burn the spreadsheets"));
