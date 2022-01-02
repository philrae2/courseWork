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
    abbrev: "lizard",
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

function changeChoiceTofull (choice) {
  let index = choicesArray.findIndex(([_, abbrev]) => choice === abbrev);
  return choicesArray[index][0];
}

function displayRoundWinner (userChoice, computerChoice) {
  if (VALID_CHOICES_MAP[userChoice].win.includes(computerChoice)) {
    prompt(`You won! You chose ${userChoice} and the computer chose ${computerChoice}`);
  } else if (VALID_CHOICES_MAP[computerChoice].win.includes(userChoice)) {
    prompt(`The computer won. You chose ${userChoice} and the computer chose ${computerChoice}`);
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
  let choice = readline.question();

  while (!choicesShort.includes(choice) && !choicesFull.includes(choice)) {
    console.log("Please enter a valid choice");
    choice = readline.question();
  }

  if (choicesArray.some(([_, abbrev]) => choice === abbrev)) {
    choice = changeChoiceTofull(choice);
  }
  return choice;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

const userChoice = getUserChoice();
const computerChoice = getComputerChoice();
displayRoundWinner(userChoice, computerChoice);

/*

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






const readline = require('readline-sync');

const CHOICES = {
  rock: {
    abbrev: 'r',
    beats: ['scissors', 'lizard']
  },
  paper: {
    abbrev: 'p',
    beats: ['rock', 'spock']
  },
  scissors: {
    abbrev: 'sc',
    beats: ['paper', 'lizard']
  },
  lizard: {
    abbrev: 'l',
    beats: ['paper', 'spock']
  },
  spock: {
    abbrev: 'sp',
    beats: ['rock', 'scissors']
  }
};


const choicesFull = Object.keys(CHOICES);
const choicesAbbrev = Object.values(CHOICES).map(choice => choice.abbrev);
const choicesArr = Object.entries(CHOICES).map(([choice, value]) => {
  return [choice, value.abbrev];
});
const NUM_ROUNDS = 5;


let userScore = 0;
let computerScore = 0;
let gameOver = false;

/////////////////////
// Functions
const prompt = function(msg) {
  console.log(`=> ${msg}`);
};

const logSpace = function(lines = 1) {
  for (let counter = 1; counter <= lines; counter++) {
    console.log('');
  }
};

const expandAbbrevChoice = function(choice) {
  const idx = choicesArr.findIndex(([_, abbrev]) => abbrev === choice);
  return choicesArr[idx][0];
};

const getChoicesStr = function() {
  let choicesStr = 'Enter ';

  choicesArr.forEach(([choice, abbrev]) => {
    choicesStr += `"${abbrev}" for ${choice}, `;
  });

  return choicesStr.slice(0, -2);
};

const getUserChoice = function() {
  const choicesStr = getChoicesStr();

  prompt(`Choose one: ${choicesFull.join(', ')}\n(${choicesStr})`);
  let choice = readline.question().toLowerCase();

  while (!choicesAbbrev.includes(choice) && !choicesFull.includes(choice)) {
    prompt(`That's not a valid choice.\n${choicesStr}`);
    choice = readline.question().toLowerCase();
  }

  if (choicesArr.some(([_, abbrev]) => abbrev === choice)) {
    choice = expandAbbrevChoice(choice);
  }

  return choice;
};

const getComputerChoice = function() {
  const randomIdx = Math.floor(Math.random() * choicesFull.length);
  return choicesFull[randomIdx];
};

const displayUserChoice = function(choice) {
  prompt(`You chose ${choice}.`);
};

const displayComputerChoice = function(computerChoice) {
  logSpace();
  prompt(`The computer chose ${computerChoice}.`);
};

const calcRoundWinner = function(choice, computerChoice) {
  if (CHOICES[choice].beats.includes(computerChoice)) {
    return 'user';
  } else if (choice === computerChoice) {
    return 'tie';
  } else return 'computer';
};

const updateScore = function(winner) {
  if (winner === 'user') {
    userScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const displayRoundWinner = function(winner) {
  if (winner === 'user') {
    prompt('You win this round!');
  } else if (winner === 'computer') {
    prompt('Computer wins this round!');
  } else {
    prompt("This round is a tie");
  }
};

const displayScore = function() {
  console.log(`You: ${userScore} | Computer: ${computerScore}`);
  logSpace();
};

const gameWasWon = function() {
  return userScore >= NUM_ROUNDS || computerScore >= NUM_ROUNDS;
};

const displayGameWinner = function() {
  if (userScore >= NUM_ROUNDS) {
    prompt('You win!!!');
  } else if (computerScore >= NUM_ROUNDS) {
    prompt('Computer wins! :(');
  }
};

const getPlayAgain = function() {
  logSpace();
  prompt('Would you like to play again? (y/n)');
  let response = readline.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(response)) {
    prompt('Please enter "y" or "n"');
    response = readline.question().toLowerCase();
  }

  return response;
};

const welcome = function() {
  // console.clear();

  prompt('Welcome to Rock Paper Scissors Lizard Spock!');
  prompt(`First to win ${NUM_ROUNDS} rounds wins the game`);
  console.log('-----------------------------------------');
  prompt('Press Enter to begin...');
  readline.question();
};

const resetGame = function() {
  gameOver = false;
  userScore = 0;
  computerScore = 0;
};

/////////////////////
// Game
welcome();

while (true) {
  while (!gameOver) {
    console.clear();
    displayScore();

    const choice = getUserChoice();
    const computerChoice = getComputerChoice();

    displayUserChoice(choice);
    displayComputerChoice(computerChoice);

    const roundWinner = calcRoundWinner(choice, computerChoice);

    updateScore(roundWinner);
    displayRoundWinner(roundWinner);

    logSpace();
    displayScore();

    if (gameWasWon()) {
      gameOver = !gameOver;
      displayGameWinner();
    } else {
      prompt('Press Enter to play next round');
      readline.question();
    }
  }

  const response = getPlayAgain();

  if (response === 'n' || response === 'no') {
    prompt('Thanks for playing!');
    break;
  } else {
    resetGame();
  }
} */