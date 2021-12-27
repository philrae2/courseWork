
const readline = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');
let language = "en";
let retry = "";


function messages (message, language) {
  return MESSAGES[language][message];
}

function prompt (key) {
  let message = messages(key, language);
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!");

let languageResponse = "";

do {
  prompt("language");
  languageResponse = readline.question();

  if (languageResponse.toLowerCase() === "english") {
    language = "en";
  } else if (languageResponse.toLowerCase() === "spanish") {
    language = "es";
  } else {
    console.log ("Please enter English or Spanish");
    languageResponse = readline.question();
  }
} while (!(languageResponse.toLowerCase().includes("en")) && !(languageResponse.toLowerCase().includes("nish")));

do {

  prompt("firstNum");
  let number1 = readline.question();

  prompt("secondNum");
  let number2 = readline.question();

  prompt("operation");
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

  prompt("result");
  console.log(output);
  prompt("retry");
  retry = readline.question();

} while (retry.toLowerCase().includes("y"));