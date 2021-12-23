/*Greeting a user
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.*/

let rlSync = require("readline-sync");

let name = rlSync.question("What is your name?\n");

if (name.includes("!")) {
  name = name.slice(0,name.length-1);
  console.log(`Hello ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}



/*
What is your name? Bob
Hello Bob.
Copy Code
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?*/