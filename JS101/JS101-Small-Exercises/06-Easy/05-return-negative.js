/*
Write a function that takes a number as an argument.
If the argument is a positive number, return the negative of that number.
If the argument is a negative number, return it as-is.

INPUT: A number
OUTPUT: A negative number

RULES: Receive a number and always return a negative number
- If zero return negative zero

LOGIC:
- Create a variable to hold the number.
- Check if negative or positive
- If positive return negative
- If negative return as is


*/

function negative (num) {

  if (num > 0) {
    return 0 - num;
  } else if (num < 0) {
    return num;
  } else {
    return 1 / -Infinity;
  }


}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0