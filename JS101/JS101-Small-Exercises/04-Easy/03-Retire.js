let rlSync = require("readline-sync");

console.log("What is your age: \n");
let age = rlSync.question();

console.log("What age would you like to retire? \n");
let retireAge = Number(rlSync.question());

let today = new Date ();

let currentYear = today.getFullYear();

let retireYears = retireAge - age;

console.log (`It's ${currentYear}. You will retire in ${currentYear + retireYears}.
  You have only ${retireYears} years of work to go!`);

