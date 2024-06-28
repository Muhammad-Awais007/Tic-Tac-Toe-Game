"use strict";

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let winner = null;
const cells = document.getElementsByClassName("cell");
const message = document.getElementById("message");

message.textContent = "Start Playing!";

const makeMove = function (index) {
  if (winner == null) {
    if (board[index] === "") {
      board[index] = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
    message.textContent = "";
  }
};

const cellClick = function (index) {
  makeMove(index);
  updateDisplay();
};

const checkWinner = function () {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const a = condition[0];
    const b = condition[1];
    const c = condition[2];

    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
};

const isBoardFull = function () {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      return false;
    }
  }
  return true;
};

const resetGame = function () {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  updateDisplay();
  message.textContent = "Start Playing!";
};

const updateDisplay = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = board[i];
  }

  winner = checkWinner();

  if (winner) {
    message.textContent = `Player ${winner} wins!`;
  } else if (isBoardFull()) {
    message.textContent = `It's a Draw!`;
  }
};
