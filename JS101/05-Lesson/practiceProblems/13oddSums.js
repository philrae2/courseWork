/*
Given the following data structure, sort the array so that the sub-arrays
are ordered based on the sum of the odd numbers that they contain.

final output: [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


INPUT:
Arrays of subarrays containing numbers

RULES:
1. Order the subarrays by total sum of the odd numbers
2. Ignore the even numbers for sums

LOGIC:
map => sort => find the sums
- Take in an array of subarrays containing numbers 
- Iterate through each subarray and total the sum of the odd numbers 
- Sort the subArrays based on the sums
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sortedArray = arr.sort ((a,b) => {
  let totalA = 0;
  let totalB = 0;
  a.forEach (number => {
    if (number % 2 !== 0 ) totalA += number;
  });

  b.forEach (number => {
    if (number % 2 !== 0 ) totalB += number;
  });

  return totalA - totalB;

});

console.log(sortedArray);


