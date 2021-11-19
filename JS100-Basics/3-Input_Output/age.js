let rlSync = require("readline-sync");
let age = Number(rlSync.question("What is your age?\n"));

console.log(`You are ${age} years old.`);
console.log(`In ten, years you will be ${age +10} years old`);
console.log(`In twety, years you will be ${age +20} years old`);
console.log(`In thirty, years you will be ${age +30} years old`);
console.log(`In forty, years you will be ${age +40} years old`);
