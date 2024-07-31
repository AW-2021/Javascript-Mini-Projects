'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 8;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.floor(Math.random() * 20) + 1; // Can use Math.trunc as well
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number!';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'white';

    // Setting high score
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber || guess < secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '📈 Guess too high!' : '📉 Guess too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    }
    //When player loses
    else {
      document.querySelector('.message').textContent = '☠️ You lost the game!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'maroon';
      document.querySelector('.number').style.backgroundColor = 'darkgrey';
    }
  }
});

// Game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  // Initial values of the score & secretNumber restored
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  // Restore initial conditions of message, number, score & guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Original body background color & number width restored
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
