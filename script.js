// script.js
const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and it said: 'No problem, I’ll go to sleep.'"
];

let time = 0;
let timerInterval;

const timerEl = document.getElementById('timer');
const jokeBox = document.getElementById('joke-box');
const resultBox = document.getElementById('result');

const player1Btn = document.getElementById('player1');
const player2Btn = document.getElementById('player2');
const startBtn = document.getElementById('startBtn');

function startChallenge() {
  time = 0;
  resultBox.textContent = '';
  jokeBox.textContent = getRandomJoke();
  startBtn.disabled = true;

  timerInterval = setInterval(() => {
    time++;
    timerEl.textContent = `Time: ${time}s`;
  }, 1000);
}

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

function endGame(winner) {
  clearInterval(timerInterval);
  resultBox.textContent = `${winner} laughed first! Survived for ${time} seconds.`;
  startBtn.disabled = false;
}

player1Btn.addEventListener('click', () => endGame("Player 1"));
player2Btn.addEventListener('click', () => endGame("Player 2"));
startBtn.addEventListener('click', startChallenge);
