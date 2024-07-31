'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 8;
console.log(document.querySelector('.guess').value);*/

const secretNumber = Math.floor(Math.random() * 20) + 1; // Can use Math.trunc as well
let score = 20;
document.querySelector('.number').textContent = secretNumber;
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber || guess < secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '📈 Guess too high!' : '📉 Guess too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠️ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
