/* eslint-disable max-lines-per-function */
const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const PLAYER1_MARKER = "X";
const PLAYER2_MARKER = "O";
const WINNING_SCORE = 5;

function displayBoard (board) {

  console.log(`You are ${PLAYER1_MARKER}. The computer is ${PLAYER2_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}  `);
  console.log("     |     |");
  console.log("-----|-----|-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}  `);
  console.log("     |     |");
  console.log("-----|-----|-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}  `);
  console.log("     |     |");
  console.log("\n");
}

function initializeBoard() {
  let board = {};

  for (let index = 1; index <= 9; index++) {
    board[String(index)] = INITIAL_MARKER;
  }
  return board;
}

function initializeScore() {
  return {
    Player: 0,
    Computer: 0,
  };
}

function prompt (message) {
  console.log(`=> ${message}`);
}
function emptySquares (board) {
  return Object.keys(board)
    .filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-statements
function computerChoosesSquare (board) {

  let defense = smartMoves(board, PLAYER1_MARKER);
  console.log (`defense = ${defense}`);
  console.log(typeof defense);
  readline.question();

  let offense = smartMoves(board, PLAYER2_MARKER);
  console.log(`offense = ${offense}`);
  readline.question();

  if (typeof offense === "number" && typeof defense === "number") {
    console.log("offense move");
    console.log(typeof offense);
    readline.question();
    board[offense] = PLAYER2_MARKER;

  } else if (typeof offense !== "number" && typeof defense === "number") {
    console.log("defense move");
    board[defense] = PLAYER2_MARKER;

  } else if (typeof offense === "number" && typeof defense !== "number") {
    board[offense] = PLAYER2_MARKER;

  } else if (board[5] === " ") {
    board[5] = PLAYER2_MARKER;

  } else {
    console.log("no smart moves");
    readline.question();

    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = PLAYER2_MARKER;
  }
}

// eslint-disable-next-line max-statements
function smartMoves (board, marker) {
  let winningLines = [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7],
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    let checkFilledSpaces = [sq1, sq2, sq3].
      filter(space => board[space] === marker);
    console.log(checkFilledSpaces);
    console.log("the Computer is looking for a smart space");
    readline.question();

    if (checkFilledSpaces.length === 2) {
      console.log("The computer found a smartspace");
      let smartSpace = [sq1, sq2, sq3].find(space => board[space] === " ");

      if (smartSpace !== undefined) {
        console.log("returning smartspace");
        readline.question();
        return smartSpace;
      }
    }
  }

  return null;
}

function detectWinner(board) {
  let winningLines = [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7],
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === PLAYER1_MARKER &&
      board[sq2] === PLAYER1_MARKER &&
      board[sq3] === PLAYER1_MARKER
    ) {
      return "Player";

    } else if (
      board[sq1] === PLAYER2_MARKER &&
      board[sq2] === PLAYER2_MARKER &&
      board[sq3] === PLAYER2_MARKER
    ) {

      return "Computer";
    }
  }
  return null;
}

function ifSomeoneWon(board) {
  return !!detectWinner(board);
}

function incrementScore(scores, winner) {
  if (winner === "Player") {
    scores.Player += 1;
  } else {
    scores.Computer += 1;
  }
}

function playerChoosesSquare (board) {
  let square;
  while (true) {

    prompt(`Choose a square from: ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();

    if (board[square] === " ") break;

    prompt("That's not a valid choice");
  }

  board[square] = PLAYER1_MARKER;
}

function joinOr (array, delimiter = ", ", joinWord = "or") {
  let resultString = "";

  for (let index = 0; index < array.length - 1; index++) {
    resultString += array[index] + delimiter;
  }

  if (array.length > 2) {
    return resultString.substring(0, resultString.length - 1) + " " + joinWord + " " + array[array.length - 1];
  } else if (array.length === 1) {
    return array.join("");
  } else if (array.length === 2) {
    return resultString.substring(0, resultString.length - 2) + " " + joinWord + " " + array[array.length - 1];
  } else {
    return array.join('');
  }
}

function displayScore (scores) {
  console.clear();

  console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
  console.log("|                                       |");
  console.log(`|   Player (X) - ${scores.Player}  | Player (O) - ${scores.Computer}    |`);
  console.log("|      Best out of 5 games wins!        |");
  console.log("|                                       |");
  console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
}

function newRoundMessage(board) {
  prompt (`${detectWinner(board)} won!`);
  prompt ("Press enter to continue");
  readline.question();

}

function whoGoesFirst() {
  prompt("Would you like to start first? Please enter Yes or No.");
  return readline.question().toLowerCase();
}

function chooseSquare (board, currentPlayer) {
  if (currentPlayer === "human") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}
function switchPlayers (currentPlayer) {
  return currentPlayer === "human" ? "computer" : "human";
}

function welcomeMsg () {
  prompt ("Welcome to Tic Tac Toe! \n Let's play a game. \n Press any key to continue.");
  readline.question();
}

while (true) { //Match Loop

  let scores = initializeScore();
  let firstPlayer;
  welcomeMsg();

  while (true) {
    firstPlayer = whoGoesFirst();
    if (firstPlayer[0].toLowerCase() === 'y' || firstPlayer[0].toLowerCase() === 'n') break;
    prompt ("Please enter a valid response.");
  }

  while (scores.Player < WINNING_SCORE && scores.Computer < WINNING_SCORE) {
    let board = initializeBoard();

    if (firstPlayer[0].includes("y")) {
      firstPlayer = "human";
    } else {
      firstPlayer = "computer";
    }

    while (true) { // Game Loop
      displayScore(scores);
      displayBoard(board);

      chooseSquare(board, firstPlayer);
      if (ifSomeoneWon(board) || boardFull(board)) break;

      firstPlayer = switchPlayers(firstPlayer);

    }
    displayScore(scores);
    displayBoard(board);

    if (ifSomeoneWon(board)) {
      newRoundMessage(board);
      incrementScore(scores, detectWinner(board));
    } else {
      prompt("It's a tie.");
      prompt("Let's keep playing!");
      readline.question();
    }

  }

  while (true) {
    prompt("Do you want to play again? Please enter Yes or No");
    let answer = readline.question().toLowerCase([0]);
    if (answer[0] !== 'y' || answer(0) !== 'n') break;
    prompt ("Please enter a valid response.");
  }

  prompt("Thanks for playing Tic Tac Toe"); 
  break;

}

