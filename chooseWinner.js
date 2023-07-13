const prompt = require("prompt-sync")();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});

function chooseWinner(event) {
  rl.question("Enter the dice number: ", function(userInput) {
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
  } 
// Ask for input again until "Q" is entered
	if (userInput.toUpperCase() !== 'Q') {
      chooseWinner();
    } else {
      rl.close(console.log("Quit the Game!"));
    }

  });

}

chooseWinner();