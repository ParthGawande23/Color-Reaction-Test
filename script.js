// script.js
let startTime, endTime;
let timeout;

const gameArea = document.getElementById('gameArea');
const startButton = document.getElementById('startButton');
const result = document.getElementById('result');

// Function to start the game
function startGame() {
  startButton.disabled = true;
  result.textContent = "Wait for green...";

  // Random delay before button turns green
  const randomDelay = Math.random() * 2000 + 1000; // 1 to 3 seconds
  
  timeout = setTimeout(() => {
    startButton.classList.add('ready');
    startButton.textContent = "Click!";
    startTime = Date.now();
    startButton.disabled = false;
  }, randomDelay);
}

// Function to check reaction time
function checkReaction() {
  if (startButton.classList.contains('ready')) {
    endTime = Date.now();
    const reactionTime = endTime - startTime;
    result.textContent = `Your reaction time: ${reactionTime}ms`;
    resetGame();
  } else {
    clearTimeout(timeout);
    result.textContent = "Too soon! Try again.";
    resetGame();
  }
}

// Function to reset the game state
function resetGame() {
  startButton.textContent = "Start";
  startButton.classList.remove('ready');
  startButton.disabled = false;
}

// Event listeners
startButton.addEventListener('click', () => {
  if (!startButton.classList.contains('ready')) {
    startGame();
  } else {
    checkReaction();
  }
});
