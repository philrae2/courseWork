const readline = require("readline-sync");

const VALID_CHOICES_MAP = {
  rock: {
    abbrev: "r",
    win: ["lizard", "scissors"]
  },
  paper: {
    abbrev: "p",
    win: ["rock", "spock"]
  },
  scissors: {
    abbrev: "sc",
    win: ["paper", "lizard"]
  },
  lizard: {
    abbrev: "l",
    win: ["paper", "spock"]
  },
  spock: {
    abbrev: "sp",
    win: ["rock", "scissor"]
  }
};

const choicesFull = Object.keys(VALID_CHOICES_MAP);

const choicesShort = Object.values(VALID_CHOICES_MAP).map(choice => choice.abbrev);

const choicesArray = Object.entries(VALID_CHOICES_MAP).map(([choice, value]) => {
  return [choice, value.abbrev];
});

let userScores = 0;
let compScores = 0;

function changeChoiceTofull (choice) {
  let index = choicesArray.findIndex(([_, abbrev]) => choice === abbrev);
  return choicesArray[index][0];
}

function displayRoundWinner (userChoice, computerChoice) {
  if (VALID_CHOICES_MAP[userChoice].win.includes(computerChoice)) {
    prompt(`You won! You chose ${userChoice} and the computer chose ${computerChoice}`);
    scoreTrack (1,0);

  } else if (VALID_CHOICES_MAP[computerChoice].win.includes(userChoice)) {
    prompt(`The computer won. You chose ${userChoice} and the computer chose ${computerChoice}`);
    scoreTrack(0,1);

  } else {
    prompt(`It's a tie! You chose ${userChoice} and the computer chose ${computerChoice}`);
  }
}

function getChoicesStr () {
  let choicesStr = "Enter: ";

  choicesArray.forEach(([choice, abbrev]) => {
    choicesStr += `${abbrev} for ${choice}, `;
  });
  return choicesStr.slice(0, -2);
}

function getComputerChoice () {
  let randomIndex = Math.floor(Math.random() * choicesShort.length);
  let computerChoice = choicesShort[randomIndex];
  computerChoice = changeChoiceTofull(computerChoice);
  return computerChoice;
}


function getUserChoice () {
  let choicesString = getChoicesStr();
  prompt (`Please choose one of the following ${choicesFull.join(", ")} \n${choicesString}.`);
  let choice = readline.question().toLowerCase();

  while (!choicesShort.includes(choice) && !choicesFull.includes(choice)) {
    console.log("Please enter a valid choice");''
    choice = readline.question().toLowerCase();
  }

  if (choicesArray.some(([_, abbrev]) => choice === abbrev)) {
    choice = changeChoiceTofull(choice);
  }
  return choice;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function scoreTrack (userScore, compScore) {
  userScores += userScore;
  compScores += compScore;

  prompt(`The current score is score is: user ${userScores} and computer: ${compScores}`);
}

function tryAgain () {
  prompt("Would you like to play again?");
  let response = readline.question().toLowerCase();
  console.log(response);

  while (response !== "no" && response !== "yes") {
    prompt("Please provide a yes or no response:");
    response = readline.question().toLowerCase();
  }
  return response;
}

while (true) {
  userScores = 0;
  compScores = 0;
  console.log(clear);

  while (userScores < 3 && compScores < 3) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    displayRoundWinner(userChoice, computerChoice);
    console.log('\n');
  }

  const response = tryAgain();
  if (response === "no") break;
}