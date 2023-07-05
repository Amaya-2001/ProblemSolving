function getMoneySpent(keyboards, drives, b) {

  const sumOfItemPriceArr = [];

  keyboards.forEach((element) => {
    //console.log(element);

    drives.forEach((usb) => {
      //console.log(usb);
      let sumOfPrice;
      sumOfPrice = element + usb;
      //console.log(sumOfPrice);

      sumOfItemPriceArr.push(sumOfPrice);

    });

  });

  //console.log(sumOfItemPriceArr);
  
  let maxItemPrice = Math.max(...sumOfItemPriceArr);
  
    if(maxItemPrice < b){
      return maxItemPrice;
      }
      else{
        return -1;
    } 
}
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([1, 2], [7, 6], 10));
console.log(getMoneySpent([4], [5], 5));

