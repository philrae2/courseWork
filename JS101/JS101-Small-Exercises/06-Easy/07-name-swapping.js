/*
Write a function that takes a string argument consisting of a first name,
a space, and a last name, and returns a new string consisting
of the last name, a comma, a space, and the first name.

INPUT: A string of two words
OUTPUT: A string of the two words swapped

RULES: Switch the words around of firstName LastName to LastName, FirstName

Logic: Split the string into and array, and join with a comma delimiter

*/

function swapName (string) {
  let arrayName = string.split(" ");
  return (`${arrayName[1]}, ${arrayName[0]}`);
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"