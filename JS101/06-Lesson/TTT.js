/* eslint-disable max-lines-per-function */
const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

function displayBoard (board) {

  console.clear();

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
}

function initializeBoard() {
  let board = {};

  for (let index = 1; index <= 9; index++) {
    board[String(index)] = INITIAL_MARKER;
  }
  return board;
}

function prompt (message) {
  console.log(`=> ${message}`);
}
function emptySquares (board) {
  return Object.keys(board)
    .filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare (board) {
  let square;
  while (true) {

    prompt(`Choose a square from: ${emptySquares(board).join(", ")}:`);
    square = readline.question().trim();

    if (board[square] === " ") break;

    prompt("That's not a valid choice");
  }

  board[square] = HUMAN_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function computerChoosesSquare (board) {

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function ifSomeoneWon(board) {
  return !!detectWinner(board);
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


while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (ifSomeoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (ifSomeoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (ifSomeoneWon(board)) {
    prompt (`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie.");
  }

  prompt("Do you want to play again?");
  let answer = readline.question().toLowerCase([0]);
  if (answer === 'y') break;
}

prompt ("Thanks for playing Tic atc Toe");