/*
Given the following data structure, write some
code that returns an object where the key is the
 first item in each subarray, and the value is the second.

 INPUT: an object with subarrays with the possiiblity of
  containing another object

  OUTPUT: An object

  RULES
  - The output object contains keys as the first item of the subarry,
  with the second valueas the value
*/
let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];


let obj1 = Object.fromEntries(arr);

console.log(obj1);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }