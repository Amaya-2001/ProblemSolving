class userInput{
	constructor(number){
		this.enterNumber = number;
	}

	//get calculate factorial of number
	get factorial(){
		return this.calFactorial();
	}

	//Method for get factorial of number
	calFactorial(){
		let fact = 1;
		for (let i=1; i<= this.enterNumber; i++){
		  fact *= i;
		}

		// console.log(fact);
		return fact;
	}

	//get random number
	get randomNumber(){
		return this.genrateRandom();
	}

	//Method for generate random number between o-user input value
	genrateRandom(){
		return Math.floor(Math.random() * (this.enterNumber - 0) + 0);

	}
}

getInput = new userInput(10); //create an object for userInput class


console.log(getInput.factorial);
console.log(getInput.randomNumber);