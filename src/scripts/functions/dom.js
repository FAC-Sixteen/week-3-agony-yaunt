const yodaForm = document.getElementById("yoda-form");
const yodaRandom = document.getElementById("random-button");
const yodarise = yodariseAdvice;
const advice = getAdvice;
const yodaSound = new Audio("assets/yoda-sound.mp3");

yodaForm.addEventListener("submit", e => {
  e.preventDefault();
  yodaSound.play();
  const input = e.target[0].value;
  advice(input, string => {
    yodarise(string);
  });
  e.target[0].value = "";
});
