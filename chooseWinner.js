const prompt = require('prompt-sync')();

function chooseWinner(gameCount){

	let computerWinnerMarks;	
	let userWinnerMarks;
const map = new Map;

for (let i=1; i<=gameCount; i++){
	let userInput = prompt("Enter the dice number:");
	//console.log(userInput);

	var userValue = parseInt(userInput);

	let randomNum =  Math.floor(Math.random() * (6 - 0) + 0);
	//console.log(randomNum);

	// if(userValue < randomNum){
	//  computerWinnerMarks += 6;

	// }
	// else if(userValue == randomNum){
	// 	 userWinnerMarks += 3;
	// 	 computerWinnerMarks += 3;

	// }
	// else{
	// 	 userWinnerMarks += 6;
	// }

	map.set(userValue,randomNum);

}


//console.log(map.size);

for (let x=0; x<map.size; x++){
	if(map.keys() < map.values()){
		computerWinnerMarks = computerWinnerMarks + 2;
		//console.log(computerWinnerMarks);

	}

	else if (map.keys() == map.values()){
		computerWinnerMarks = computerWinnerMarks + 1;
		userWinnerMarks = userWinnerMarks + 1;

	}

	else{
		userWinnerMarks = userWinnerMarks + 2;
	}
}
	
// console.log(userWinnerMarks);
// console.log(computerWinnerMarks);




	
}


chooseWinner(2);