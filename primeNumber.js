// find prime number(s) from an array

let array = [4,2,5,7,11];
let arrayLength = array.length;


function isPrime(number){
	if (number <= 1){
		return false;
	
	}

	else{
		for(let i=2; i<number; i++){
			if(number % i == 0){
				return false;
			
			}
		}

		return true;

		}

	}

//let checkPrime;
let primeArray = [];

function primeArr(arr){
	arr.forEach((element) => {
		//console.log(element);
		let isPrimeNum = isPrime(element);
		//console.log(isPrimeNum);
		if(isPrimeNum == true){
			//console.log(element);
			primeArray.push(element);

		}
    })
//console.log(primeArray);
	return primeArray;

}
	
isPrime(array);
console.log(primeArr(array));


