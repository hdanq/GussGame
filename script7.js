let number = Math.trunc(Math.random() * 20 + 1);

let hightScore = 0;
function displayMessage(messgae) {
  return (document.querySelector(".message").textContent = messgae);
}
function scoreNumber(score) {
  return (document.querySelector("#score").textContent = score);
}
function hightScoreNumber(hightScore) {
  return (document.querySelector(".hightScore").textContent = hightScore);
}
document.querySelector(".checkGuess").addEventListener("click", function () {
  let score = document.getElementById("score").innerHTML;
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("❌ You need import a number");
  } else {
    if (guess < 1) {
      displayMessage("❌ You can try between 1 to 20");
    } else {
      if (number === guess) {
        displayMessage("💥 Congratulations");
        if (hightScore < score) {
          hightScore = score;
          hightScoreNumber(hightScore);
        }
      } else {
        displayMessage(number < guess ? "⛔ To hight" : "⛔ To low");
        score--;
        scoreNumber(score);
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage("☑ Start guessing....");
  scoreNumber("20");
});
