

/*Sum or Product of Consecutive Integers
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Copy Code
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
Copy Code
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.*/

let product_or_sum = 0;

rlsync = require("readline-sync");
let number;

do {
  number = parseInt(rlsync.question("Please enter a number?\n"), 10);
} while (isNaN(number));

let multiplyOrAdd;
let move;

do {
  multiplyOrAdd = rlsync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product.");
} while (!["s", "p"].includes(multiplyOrAdd.toLowerCase()))




if (multiplyOrAdd === "s") {
  product_or_sum = 0;
  for (let counter = 1; counter <= number; counter++) {
    product_or_sum += counter;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${product_or_sum}.`)
} else if (multiplyOrAdd === "p") {
  product_or_sum = 1;
  for (let counter = 1; counter <= number; counter++) {
    product_or_sum *= counter;
  }
  console.log(`The product of the integers between 1 and ${number} is ${product_or_sum}.`)
} else {
  console.log("Please enter s or p");
}
