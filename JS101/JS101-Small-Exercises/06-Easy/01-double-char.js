/*

Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.

INPUTS: A string

OUTPUT: A string of repeated characters

RULES: Take in a string and repeat the characters twice sequentially.


TEST CASES:
- One word string
- Two words with punctuation and spaces
  The spaces and puntuation also get repeated twice
- An empty string.


LOGIC:
- Take in a string
- Iterate through the string and repeat the char

*/

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function repeater (string) {
  let newString = "";
  let arrString = string.split("");

  arrString.forEach(char => {
    newString += char + char;
  });

  return newString;
}