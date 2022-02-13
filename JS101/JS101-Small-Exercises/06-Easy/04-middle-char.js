/*
Write a function that takes a non-empty string argument
and returns the middle character(s) of the string.
If the string has an odd length, you should return exactly one character.
If the string has an even length, you should return exactly two characters.

INPUT - a string
OUTPUT - a string of either a space, one or two characters
RULES: Return the middle character, one character if the length of string is odd
or only one character is given, two if the length is even

LOGIC
- Create a variable to hold the string
- Find the length of the string
- Find if even or odd
- If odd, return the character found in the index of the string length
 rounded up.
 - If even return the index of the string length / 2 and the result plus one.
 - if the string length is one return the string

*/

function centerOf (string) {
  let centerLength = string.length / 2;
  console.log(centerLength);

  if (string.length % 2 === 0 ) {
    return string.substring(centerLength - 1, centerLength + 1);
  } else if (string.length % 2 !== 0) {
    let center = Math.ceil(centerLength);
    return string.substring(center - 1, center);
  } else {
    return string;
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"