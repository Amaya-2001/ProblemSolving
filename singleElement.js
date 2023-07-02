function findUnique(arr) {
    
    const myMap = new Map(); 

    arr.forEach((element) => {
        if (myMap.has(element)) {
            let value = myMap.get(element);
            value ++;
            myMap.set(element, value);
        } else {
            myMap.set(element, 1);
        }
    })

    for (let key of myMap.keys()) {
        if (myMap.get(key) == 1) return key;
    }

}

// let arr = ['a', 'a', 'b', 'b', 'c'];
let arr = [2,4,4,6,6];
let uniqueVal = findUnique(arr);
console.log(uniqueVal);
