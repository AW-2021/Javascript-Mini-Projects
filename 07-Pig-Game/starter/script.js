'use strict';

// Selecting elements
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// STARTING CONDITIONS
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  player1.querySelector('.score').textContent = 0;
  player2.querySelector('.score').textContent = 0;

  player1.querySelector('.current-score').textContent = 0;
  player2.querySelector('.current-score').textContent = 0;

  // Hiding the dice at the start of the game
  diceEl.classList.remove('hidden');

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

init();
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
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
    }
    // Switch player when dice rolls 1
    else {
      switchPlayer();
    }
  }
};

const playerWins = function () {
  playing = false;
  diceEl.classList.add('hidden');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
};

const holdScore = function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Checking if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish game
      playerWins();
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
};

// Roll Dice functionality
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newBtn.addEventListener('click', init);
