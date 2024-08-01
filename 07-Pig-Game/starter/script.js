'use strict';

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentPlayer = document.querySelector('.player--active');

console.log(player1);
console.log(player2);
console.log(currentPlayer);

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

rollBtn.addEventListener('click', rollDice);
