/* Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

INPUTS/OUTPUTS
1. An array of input put numbers
2. Output as a string with 3 decimal letters.

LOGIC
1. Intake an array of numbers
2. Create a string variable
3. Loop through the elements of the array and multiply each number to the running total
4. Divide the result by the lenght of the array
5. Convert the number to three decimal places
6. Convert the number to string and return


*/

function multiplicativeAverage (array) {
  let stringResult = "";
  let result = array.reduce ((total, number) => total * number, 1);
  stringResult = String((result / array.length).toFixed(3));
  return stringResult;

}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"