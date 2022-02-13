/*

Write a function that takes a string as an argument and returns true if
all parentheses in the string are properly balanced, false otherwise.
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

INPUT:
- A string of words

OUTPUT
- Boolean

RULES"
- Check if the string has matching parenthesis

LOGIC
- Use a loop to look for opening parenthesis
 - increment opening parenthesis counter
 - If closing parenthesis found subtract from open parenthesis counter
 - If by the end of the loop the parenthesis counter is not zero, then
 return false, otherwise return true.


*/

function isBalanced (string) {
  let openingBracket = 0;
  let closingBracket = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] === "(") {
      openingBracket += 1;
    } else if (string[index] === ")") {
      closingBracket += 1;
      if (openingBracket - closingBracket < 0) {
        return false;
      }
    }
  }
  if (openingBracket - closingBracket !== 0 ) {
    return false;
  }
  return true;

}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);