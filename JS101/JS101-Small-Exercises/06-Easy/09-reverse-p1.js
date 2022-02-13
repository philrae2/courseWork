/*
Write a function that takes a string argument
and returns a new string containing the words from the string argument in reverse order.

INPUT: A string (empty or multiple words)
OUTPUT: a string of the reverse order of words

RULES: The string of words are reversed as the output.

LOGIC
- Split the string into an array
- Reverse the array and join


*/

function reverseSentence (string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"