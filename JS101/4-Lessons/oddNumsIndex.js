let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddNumbersIndex (array) {
  let oddDoubleNums = [];
  
  array.forEach ((element) => {
    index = array.findIndex(number => number === element);
    console.log(index);
    if (index % 2 !== 0) {
      oddDoubleNums.push (element * 2);
    }
  });
  console.log(oddDoubleNums);
}

doubleOddNumbersIndex(myNumbers); 