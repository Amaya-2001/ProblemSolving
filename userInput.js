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
}

getInput = new userInput(5); //create an object for userInput class


console.log(getInput.factorial);