'use strict';

// Selecting elements
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentPlayer = document.querySelector('.player--active');

let currentScore = 0;
let totalScore = 0;
let random;

const rollDice = function () {
  random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
  dice.setAttribute('src', `dice-${random}.png`);

  if (random === 1) {
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
  } else {
    currentScore += random;
    currentPlayer.querySelector('.current-score').textContent = currentScore;
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
};

rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newBtn.addEventListener('click', reset);
