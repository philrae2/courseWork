/*Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.*/

RlSync = require("readline-sync");

string = RlSync.question("Please enter a string\n");

function upperCase (strings) {
  if (strings.length > 10) {
    console.log(strings.toUpperCase());
    
  } else {
    console.log(strings)
  }
}

upperCase(string);