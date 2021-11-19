let rlSync = require("readline-sync");

function promptNumber (prompt) {
  let number = parseFloat(rlSync.question(prompt));
  return number;
}

function multiply (number1, number2) {
  return number1 * number2;
}

let number1 = promptNumber("Please enter a number.\n");
let number2 = promptNumber("Please enter a second number.\n");

let result = multiply(number1, number2);

console.log (`${number1} multiplied by ${number2} = ${result}`);
