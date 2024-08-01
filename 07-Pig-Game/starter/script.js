'use strict';

// Selecting elements
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentPlayer = document.querySelector('.player--active');

// STARTING CONDITIONS
let currentScore = 0;
let totalScore = 0;
// Hiding the dice at the start of the game
diceEl.classList.add('hidden');

const rollDice = function () {
  // Generating a random dice roll
  let random = Math.floor(Math.random() * 6) + 1;

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${random}.png`);

  // Check number rolled on dice
  if (random !== 1) {
    // Add dice to current (player's) score
    currentScore += random;
    currentPlayer.querySelector('.current-score').textContent = currentScore;
  }
  // Switch player when dice rolls 1
  else {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    currentScore = Number(
      currentPlayer.querySelector('.current-score').textContent
    );
    totalScore = Number(currentPlayer.querySelector('.score').textContent);
  }
};

const playerWins = function () {
  currentPlayer.classList.add('player--winner');
};

const holdScore = function () {
  totalScore = currentScore;
  currentPlayer.querySelector('.score').textContent = totalScore;
  if (totalScore >= 100) {
    playerWins();
  }
};

const reset = function () {
  currentScore = 0;
  totalScore = 0;

  player1.querySelector('.current-score').textContent = 0;
  player2.querySelector('.current-score').textContent = 0;

  player1.querySelector('.score').textContent = 0;
  player2.querySelector('.score').textContent = 0;

  currentPlayer.classList.remove('player--winner');

  currentPlayer = player1;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  diceEl.classList.remove('hidden');
};

// Roll Dice functionality
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newBtn.addEventListener('click', reset);
