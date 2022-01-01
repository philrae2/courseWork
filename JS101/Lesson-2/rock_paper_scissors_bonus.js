const readline = require("readline-sync");
const VALID_CHOICES = ["r - rock", "p - paper", "sc - scissors", "l - lizard", "sp - spock"];
const VALID_CHOICES_SHORT = ["r", "p", "sc", "l", "sp"];
const VALID_CHOICES_MAP = {r : "rock", p : "paper", sc: "scissors", l : "lizard", sp : "spock"};

function displayWinner (choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

  if ((choice === "r" && computerChoice === "sc") ||
      (choice === "p" && computerChoice === "r") ||
      (choice === "sc" && computerChoice === "p") ||
      (choice === "sp && computerChoice === ")) {
    prompt("You win!");
  } else if ((choice === "rock" && computerChoice === "p") ||
            (choice === "p" && computerChoice === "sc") ||
            (choice === "sc" && computerChoice === "r")) {
    prompt("The Computer Wins!");
  } else {
    prompt ("It's a tie"); 
  }
}
function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt (`Please choose one: (e.g., sp for spock) ${Object.entries(VALID_CHOICES_MAP).join(" or ")} `);
  let choice = readline.question().toLowerCase();

  while (!Object.keys(VALID_CHOICES_MAP).includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * Object.entries(VALID_CHOICES_MAP).length);
  let computerChoice = Object.keys(VALID_CHOICES_MAP)[randomIndex];
  displayWinner (choice, computerChoice);
  


  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLocaleLowerCase();
  while (answer[0] !=="n" && answer[0] !=="y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLocaleLowerCase();
  }
  if  (answer[0] !== "y") break;
}