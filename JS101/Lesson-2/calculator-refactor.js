// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require("readline-sync");

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber (number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to Calculator!");

prompt("Whats the first number");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm that doesn't look like a number to me...");
  number1 = readline.question();
}

prompt(number1);


prompt("What is the second number");
let number2 = readline.question();

prompt(number2);

while (invalidNumber(number2)) {
  prompt("Hmmm that doesn't look like a number to me...");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operator = readline.question();

while (!["1","2","3","4"].includes(operator)) {
  prompt("Must choose 1,2,3 or 4.");
  operator = readline.question();
}

let output = 0;

switch (operator) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}.`);