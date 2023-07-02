// A function that returns the even numbers of an array

let array = [4,5,6,7];


function evenNumber(arr){
	let newEvenArr = [];
	arr.forEach((element) =>{
		if(element %2 == 0){
			newEvenArr.push(element);			
		}
		return newEvenArr;

	})

	console.log(newEvenArr);
	
	

}
evenNumber(array);