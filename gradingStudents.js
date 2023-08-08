function gradingStudents(grades) {
  let newArr = [];
  grades.forEach((element) => {
    //console.log(element);
    if (element > 40) {
      //newArr.push(Math.ceil(element / 5) * 5);
      let nextMultipleOfFive = Math.ceil(element / 5) * 5;
      let differenceValue = nextMultipleOfFive - element;
      if (differenceValue < 3) {
        newArr.push(nextMultipleOfFive);
      } else {
        newArr.push(element);
      }
    } else {
      newArr.push(element);
    }
  });
  console.log(newArr);
}

gradingStudents([75, 67, 40, 37, 33]);
