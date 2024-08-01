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
const scores = [0, 0];
let currentScore = 0;
let totalScore = 0;
let activePlayer = 0;
// Hiding the dice at the start of the game
diceEl.classList.add('hidden');

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // currentPlayer.querySelector('.current-score').textContent = currentScore;
  }
  // Switch player when dice rolls 1
  else {
    // player1.classList.toggle('player--active');
    // player2.classList.toggle('player--active');
    // if (currentPlayer === player1) {
    //   currentPlayer = player2;
    // } else {
    //   currentPlayer = player1;
    // }
    // currentScore = Number(
    //   currentPlayer.querySelector('.current-score').textContent
    // );
    // totalScore = Number(currentPlayer.querySelector('.score').textContent);

    switchPlayer();
  }
};

const playerWins = function () {
  currentPlayer.classList.add('player--winner');
};

const holdScore = function () {
  // Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Checking if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish game
    playerWins();
  }

  // Switch to next player
  switchPlayer();
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
