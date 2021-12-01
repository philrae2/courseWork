/* Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

Check if input is integer*/

RlSync = require("readline-sync");
number = parseInt(RlSync.question("Please enter a number.\n"));

function evenOrOdd (integer) {
  if (!Number.isInteger(integer)) {
    return console.log(`${integer} is not an integer`);
  } else if (integer % 2 === 0) {
      console.log(`${integer} is even.`);
  } else {
    console.log(`${integer} is odd.`);
  }
}

evenOrOdd(number);