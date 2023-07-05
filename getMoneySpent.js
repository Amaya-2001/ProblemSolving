let drives = [];
let keyboards = [];
let driveArrLength = drives.length;
let keyboardsArrLength = keyboards.length;
const sumOfItemPriceArr = [];
let sumOfPrice;

function getMoneySpent(keyboards, drives, b) {
  keyboards.forEach((element) => {
    //console.log(element);

    drives.forEach((usb) => {
      //console.log(usb);

      let sumOfPrice = element + usb;
      //console.log(sumOfPrice);
      sumOfItemPriceArr.push(sumOfPrice);
    });
  });
  //console.log(sumOfItemPriceArr);
  
  let maxItemPrice = Math.max(...sumOfItemPriceArr);
  const map = new Map;
  map.set(maxItemPrice,b);
  console.log(map);
  // for (let [key, value] of  map.entries()) {
  // console.log(key + " = " + value)
  // if(key < value){
  //   console.log(key);
  //   //return key;
  // }
  // else {
  //   return -1;
  // }
//}
  // //console.log(maxItemPrice);
  //  if(maxItemPrice < b){
  //     return maxItemPrice;
  //     }
  //     else{
  //       return -1;
  //   } 
}
//console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
// console.log(getMoneySpent([1, 2], [7, 6], 10));
// console.log(getMoneySpent([4], [5], 5));
getMoneySpent([1, 2], [7, 6], 10)
getMoneySpent([4], [5], 5);
getMoneySpent([3, 1], [5, 2, 8], 10)
