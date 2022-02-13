/*
Write a function that takes a positive integer as an
argument and returns that number with its digits reversed.

INPUTS: a number

OUTPUT: a number reversed

RULES: Take in a positive number and reverse it


TEST CASES:
- Only one number
- Only positive
- A number with zeros, the zeros are dropped

LOGIC:
- Create a variable to hold the number
- Convert the number to a string
- Iterate through the string in reverse

*/

function reverseNumber (number) {
  let reverseNum = "";
  let numberString = String(number);

  for (let index = numberString.length - 1; index >= 0; index--) {
    reverseNum += numberString[index];
  }
  console.log(reverseNum);
  return parseInt (reverseNum, 10);
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1