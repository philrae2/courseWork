/*

Write a function that takes a string, doubles every
consonant character in the string, and returns the result as a new string.
The function should not double vowels ('a','e','i','o','u'),
digits, punctuation, or whitespace.

INPUTS: A string

OUTPUT: A string of repeated consonant characters

RULES: Take in a string and repeat the consonant characters twice sequentially.


TEST CASES:
- One word string
- Two words with punctuation and spaces
  The spaces and puntuation also get repeated twice
- An empty string.


LOGIC:
- Take in a string
- Iterate through the string and repeat the char

*/

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function doubleConsonants (string) {
  let newString = "";
  let arrString = string.split("");
  let consonants = "abcdfghjklmnpqrstyxwvzABCDFGHJKLMNPQRSTYXWYVZ";

  arrString.forEach(char => {
    if (consonants.includes(char)) {
      newString += char + char;
    } else {
      newString += char;
    }
  });

  return newString;
}