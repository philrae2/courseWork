const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt (`Please choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

  if ((choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")) {
    prompt("You win!");
  } else if ((choice === "rock" && computerChoice === "paper") ||
            (choice === "paper" && computerChoice === "scissors") ||
            (choice === "scissors" && computerChoice === "rock")) {
    prompt("The Computer Wins!");
  } else {
    prompt ("It's a tie"); 
  }

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLocaleLowerCase();
  while (answer[0] !=="n" && answer[0] !=="y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLocaleLowerCase();
  }
  if  (answer[0] !== "y") break;
}