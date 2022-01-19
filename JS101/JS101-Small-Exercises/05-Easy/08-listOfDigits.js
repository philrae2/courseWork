/*Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

INPUT
- An integer from 1 to multiple numbers

OUTPUT
- An array that contains all the numbers 

RULES
- Non-empty number 

LOGIC
- Receive a number
- Convert the number to a string
- Split the string to turn into an array 
- Iterate through the array and convert to numbers
*/

function digitList (num) {
  let stringNumArray = String(num).split("");
  let numArray = stringNumArray.map ((element) => Number(element))
  return numArray;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]