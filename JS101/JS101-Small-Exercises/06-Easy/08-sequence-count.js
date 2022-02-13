/*
Create a function that takes two integers as arguments. The first argument
is a count, and the second is the starting number of a sequence that your
function will create. The function should return an array containing the
same number of elements as the count argument. The value of each element
should be a multiple of the starting number.

You may assume that the count argument will always
be an integer greater than or equal to 0. The starting
number can be any integer. If the count is 0, the function
should return an empty array.

INPUT: TWo numbers
OUTPUT: An array of numbers (either positive or negative)

RULES: The first number determines how many numbers to output in the array. 
  The second number determines the starting number of the sequence and
  determines the multiple of the subsequent numbers.

LOGIC
- Create an array to hold the numbers
- Create a loop that will iterate at the amount given by the first number
- At each iteration start with the counter set to the second nmber
    and multiply by the second number


*/

function sequence (iterateNum, startingNum) {
  let numArray = [];

  for (let count = 1; count <= iterateNum; count++) {
    let result = startingNum * count;
    numArray.push(result);
  }
  return numArray;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []