function diceRoll() {
  let max = 6;
  let min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateDiceImage(htmlElement, faceValue) {
  htmlElement.setAttribute("src", "images/dice" + faceValue + ".png");
}

function updateHeading(headingElement, diceRoll1, diceRoll2) {
  if (diceRoll1 > diceRoll2) {
    headingElement.textContent = "🚩 Player 1 Wins!";
  }
  if (diceRoll1 < diceRoll2) {
    headingElement.textContent = "Player 2 Wins! 🚩";
  }
  else if (diceRoll1 === diceRoll2) {
    headingElement.textContent = "Draw!";
  }
}

var randomNumber1 = diceRoll();
var randomNumber2 = diceRoll();;

var diceImage1 = document.querySelector(".img1");
var diceImage2 = document.querySelector(".img2");

updateDiceImage(diceImage1, randomNumber1);
updateDiceImage(diceImage2, randomNumber2);

var headingHTML = document.querySelector("h1");

updateHeading(headingHTML, randomNumber1, randomNumber2);
