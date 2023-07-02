let array = [4,5,6,7,9,13];

function oddNumber(arr){
	let newOddArr = [];
	arr.forEach((element) =>{
		if(element %2 != 0){
			newOddArr.push(element);
		}
			
	})

		return newOddArr;
	//console.log(newOddArr);
}

console.log(oddNumber(array));