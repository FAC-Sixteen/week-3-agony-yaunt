const yodaForm = document.getElementById("yoda-form");
const yodaRandom = document.getElementById("random-button");
const yodarise = yodariseAdvice;
const advice = getAdvice;

yodaForm.addEventListener("submit", e => {
  e.preventDefault();
  const input = e.target[0].value;
  advice(input, string => {
    console.log(string);
    yodarise(string);
  });
  e.target[0].value = "";
});

yodaRandom.addEventListener("click", e => {
  const input = "";
  advice (input, string => {
    yodarise(string);
  });
});
