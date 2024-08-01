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
