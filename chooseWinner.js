const prompt = require("prompt-sync")();

function chooseWinner(event) {
  let userInput = prompt("Enter the dice number:");
  //console.log(userInput);
  var userValue = parseInt(userInput);
  // console.log("userValue", userValue);
  let randomNum = Math.floor(Math.random() * (6 - 0) + 0);
  // console.log("randomNum", randomNum);
  let AIMarks = 0;
  let userMarks = 0;

  //loop until keypress
  if (userValue <= randomNum) {
      AIMarks = AIMarks + 2;
      console.log("Try again!, AI is the Winner");
      console.log("Score:", AIMarks);
    } else if (userValue == randomNum) {
      console.log("Game is draw!");
    } else if (userValue >= randomNum) {
      userMarks = userMarks + 2;
      console.log("Congrats!, You are the Winner");
      console.log("Score:", userMarks);
    } else {
      console.log("Input is not valid!");
    }
}

chooseWinner();
