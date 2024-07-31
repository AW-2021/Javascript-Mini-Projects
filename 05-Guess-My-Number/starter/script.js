'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1; // Can use Math.trunc as well
let score = 20;
let highScore = 0;
console.log(secretNumber);

// Function displays text in '.message' paragraph
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const correctGuess = function () {
  displayMessage('🎉 Correct Number!');
  document.querySelector('.number').textContent = secretNumber;

  // Setting body and .number styles
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.backgroundColor = 'white';

  // Setting high score
  highScore = score > highScore ? score : highScore;
  document.querySelector('.highscore').textContent = highScore;
};

const wrongGuess = function (guess) {
  displayMessage(
    guess > secretNumber ? '📈 Guess too high!' : '📉 Guess too low!'
  );
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  }
  // When player loses
  else {
    displayMessage('☠️ You lost the game!');
    document.querySelector('.score').textContent = 0;

    // Setting body and .number styles
    document.querySelector('body').style.backgroundColor = 'maroon';
    document.querySelector('.number').style.backgroundColor = 'darkgrey';
  }
};

const reset = function () {
  // Initial values of the score & secretNumber restored
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  // Restore initial conditions of message, number, score & guess input field
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Original body background color & number width restored
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('❌ No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    correctGuess(guess);
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    wrongGuess(guess);
  }
});

// Game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  reset();
});
