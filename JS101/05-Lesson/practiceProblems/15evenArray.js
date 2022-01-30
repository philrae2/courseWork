/*
Given the following data structure, write some code to
return an array which contains only the objects where all the numbers are even.

INPUT
- An array of objects with subarrays of numbers

OUTPUT
- An array of only objects with subarrays of only even numbers

LOGIC
- Iterate through each object in the array and return only objects with  the even containing arrays
- check if the numbers in the subarray are all even

*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenArrays = arr.filter (objects => {
  let arrays = Object.values(objects);
  return (arrays.every(array => array.every(number => number % 2 === 0)));

});

console.log(evenArrays);