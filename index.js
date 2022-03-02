firstResult = 0;
document.getElementById("knappen2").className = "hide";
document.querySelector("body").className = "";
document.querySelector("td").className = "";
document.querySelector("th").className = "";
document.querySelector("table").className = "";
document.querySelector("#container").className = "";
document.getElementById("message").innerHTML = "...";

function roll() {
  document.getElementById("message").innerHTML = "...";
  if (firstResult !== 0) {
    die1 = 1 + Math.floor(Math.random() * 6);
    die2 = 1 + Math.floor(Math.random() * 6);
    dice = die1 + die2;
    secondResult = dice;

    // DICE ONE ICONS
    if (die1 == 1) {
      document.getElementById("dice-one").className = "fas fa-dice-one";
    }
    if (die1 == 2) {
      document.getElementById("dice-one").className = "fas fa-dice-two";
    }
    if (die1 == 3) {
      document.getElementById("dice-one").className = "fas fa-dice-three";
    }
    if (die1 == 4) {
      document.getElementById("dice-one").className = "fas fa-dice-four";
    }
    if (die1 == 5) {
      document.getElementById("dice-one").className = "fas fa-dice-five";
    }
    if (die1 == 6) {
      document.getElementById("dice-one").className = "fas fa-dice-six";
    }
    // DICE TWO ICONS
    if (die2 == 1) {
      document.getElementById("dice-two").className = "fas fa-dice-one";
    }
    if (die2 == 2) {
      document.getElementById("dice-two").className = "fas fa-dice-two";
    }
    if (die2 == 3) {
      document.getElementById("dice-two").className = "fas fa-dice-three";
    }
    if (die2 == 4) {
      document.getElementById("dice-two").className = "fas fa-dice-four";
    }
    if (die2 == 5) {
      document.getElementById("dice-two").className = "fas fa-dice-five";
    }
    if (die2 == 6) {
      document.getElementById("dice-two").className = "fas fa-dice-six";
    }

    if (secondResult === firstResult) {
      console.log("U WIN!");
      document.getElementById("message").innerHTML = "U WIN!";
      document.getElementById("knappen").className = "hide";
      document.getElementById("knappen2").className = "";
      document.querySelector("body").className = "winning";
      document.querySelector("td").className = "winning";
      document.querySelector("th").className = "winning";
      document.querySelector("table").className = "winning";
      document.querySelector("#container").className = "winning";
    }
    if (secondResult === 7) {
      console.log("SEVEN! U LOSE");
      document.getElementById("message").innerHTML = "SEVEN! U LOSE";
      document.getElementById("knappen").className = "hide";
      document.getElementById("knappen2").className = "";
    }
  }
  if (firstResult === 0) {
    die1 = 1 + Math.floor(Math.random() * 6);
    die2 = 1 + Math.floor(Math.random() * 6);
    dice = die1 + die2;
    firstResult = dice;

    // DICE ONE ICONS
    if (die1 == 1) {
      document.getElementById("dice-one").className = "fas fa-dice-one";
    }
    if (die1 == 2) {
      document.getElementById("dice-one").className = "fas fa-dice-two";
    }
    if (die1 == 3) {
      document.getElementById("dice-one").className = "fas fa-dice-three";
    }
    if (die1 == 4) {
      document.getElementById("dice-one").className = "fas fa-dice-four";
    }
    if (die1 == 5) {
      document.getElementById("dice-one").className = "fas fa-dice-five";
    }
    if (die1 == 6) {
      document.getElementById("dice-one").className = "fas fa-dice-six";
    }
    // DICE TWO ICONS
    if (die2 == 1) {
      document.getElementById("dice-two").className = "fas fa-dice-one";
    }
    if (die2 == 2) {
      document.getElementById("dice-two").className = "fas fa-dice-two";
    }
    if (die2 == 3) {
      document.getElementById("dice-two").className = "fas fa-dice-three";
    }
    if (die2 == 4) {
      document.getElementById("dice-two").className = "fas fa-dice-four";
    }
    if (die2 == 5) {
      document.getElementById("dice-two").className = "fas fa-dice-five";
    }
    if (die2 == 6) {
      document.getElementById("dice-two").className = "fas fa-dice-six";
    }

    if (firstResult === 2) {
      console.log("SNAKE EYES! U LOSE");
      document.getElementById("message").innerHTML = "SNAKE EYES! U LOSE";
      document.getElementById("knappen").className = "hide";
      document.getElementById("knappen2").className = "";
    }
    if (firstResult === 7) {
      console.log("SEVEN! U WIN");
      document.getElementById("message").innerHTML = "SEVEN! U WIN";
      document.getElementById("knappen").className = "hide";
      document.getElementById("knappen2").className = "";
      document.querySelector("body").className = "winning";
      document.querySelector("td").className = "winning";
      document.querySelector("th").className = "winning";
      document.querySelector("table").className = "winning";
      document.querySelector("#container").className = "winning";
    }
    if (firstResult === 3 || firstResult === 12) {
      console.log("U LOSE");
      document.getElementById("message").innerHTML = "U LOSE!";
      document.getElementById("knappen").className = "hide";
      document.getElementById("knappen2").className = "";
    }
    if (firstResult === 11) {
      console.log("U WIN!");
      document.getElementById("message").innerHTML = "U WIN!";
      document.getElementById("knappen").className = "hide";
      document.getElementById("knappen2").className = "";
      document.querySelector("body").className = "winning";
      document.querySelector("td").className = "winning";
      document.querySelector("th").className = "winning";
      document.querySelector("table").className = "winning";
      document.querySelector("#container").className = "winning";
    }
  }
}

function roll2() {
  document.getElementById("knappen2").className = "hide";
  document.getElementById("knappen").className = "";
  document.getElementById("message").innerHTML = "...";
  firstResult = 0;
  document.querySelector("body").className = "";
  document.querySelector("td").className = "";
  document.querySelector("th").className = "";
  document.querySelector("table").className = "";
  document.querySelector("#container").className = "";
}
