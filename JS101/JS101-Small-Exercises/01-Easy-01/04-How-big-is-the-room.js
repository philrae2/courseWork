/*How big is the room?
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Copy Code
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).*/

let rlsync = require("readline-sync");

let length = rlsync.question("What is the length of the room in? \n");

let width = rlsync.question("What is the width of the room in?\n");

area_in_meters = length * width;
area_in_feet = area_in_meters * 10.7639104;

console.log(`The area of the room is ${area_in_meters.toFixed(2)} square meters (${area_in_feet.toFixed(2)} square feet)`)