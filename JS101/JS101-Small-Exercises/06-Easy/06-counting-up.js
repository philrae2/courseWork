/*
Write a function that takes an integer argument and returns
an array containing all integers between 1 and the argument (inclusive),
in ascending order.
You may assume that the argument will always be a positive integer.

INPUT: A number
OUTPUT: An array of numbers

Rules: Take in an array and retrun all the numbers between that number and 1

LOGIC: 
- Create a for loop starting at one and iterate all 
the way up to the given number
- At each iteration push the number to an array
*/

function sequence (num) {
  const numberArr = [];

  for (let counter = 1; counter <= num; counter++) {
    numberArr.push(counter);
  }

  return numberArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]