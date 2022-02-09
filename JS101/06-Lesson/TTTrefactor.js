/* eslint-disable max-lines-per-function */
const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_SCORE = 5;

function displayBoard (board) {

  console.log(`You are ${HUMAN_MARKER}. The computer is ${COMPUTER_MARKER}`);

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

function computerChoosesSquare (board) {

  let smartSpace = smartMoves(board, HUMAN_MARKER);
  console.log(`Smartspace = ${smartSpace}`);
  console.log(typeof smartSpace);
  console.log("The computer chooses a square");
  readline.question();

  if (smartSpace !== null && smartSpace !== " ") {
    board[smartSpace] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

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
      console.log("The computer found a threat");
      let smartSpace = [sq1, sq2, sq3].find(space => board[space] === " ");
      console.log(`smartspace = ${smartSpace}`);
      readline.question();
      if ([1,2,3,4,5,6,7,9].includes(smartSpace)) {
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
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";

    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
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

  board[square] = HUMAN_MARKER;
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
while (true) { //Match Loop

  let scores = initializeScore();

  while (scores.Player < 5 && scores.Computer < 5) {
    let board = initializeBoard();

    while (true) { // Game Loop
      displayScore(scores);
      displayBoard(board);

      playerChoosesSquare(board);
      if (ifSomeoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (ifSomeoneWon(board) || boardFull(board)) break;
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

  prompt("Do you want to play again?");
  let answer = readline.question().toLowerCase([0]);
  if (answer !== 'y') break;
}

prompt ("Thanks for playing Tic Tac Toe");