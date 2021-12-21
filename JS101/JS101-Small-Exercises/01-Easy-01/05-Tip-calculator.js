/*Tip Calculator
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Example:

Copy Code
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00*/

rlsync = require("readline-sync");

let bill = parseFloat(rlsync.question("What is the bill?\n"));
let tipPercent = parseFloat(rlsync.question("What is the tip percentage?\n"));

let tip = bill * tipPercent*0.01;
let total = bill + tip;

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total bill is ${total.toFixed(2)}`);
