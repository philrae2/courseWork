/* Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers. 

INPUT: An array of numbers
OUTPUT: Average of all numbers rounded down to the integer compmonent

RULES:
- No empty arrays
- All numbers will be positive


LOGIC:
- Receive an array
- Iterate through the array and sum all the numbers
- Find the average and round down to the nearest whole number

*/

function average (arr) {
  let sum = arr.reduce ((sum, number) => sum + number, 0);
  let average = Math.floor(sum/arr.length).toFixed(0);
  console.log (average);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40