// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require("readline-sync");

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!");

prompt("Whats the first number");
let number1 = readline.question();

prompt(number1);

prompt("What is the second number");
let number2 = readline.question();

prompt(number2);

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operator = readline.question();

let output;

if (operator === "1") {
  output = Number(number1) + Number(number2);
} else if (operator === "2") {
  output = Number(number1) - Number(number2);
} else if (operator === "3") {
  output = Number(number1) * Number(number2);
} else if (operator === "4") {
  output = Number(number1) / Number(number2);
}
prompt(`The result is: ${output}.`);