const box = document.getElementById("box");
const message = document.getElementById("message");
const reactionTimeDisplay = document.getElementById("reaction-time");

let startTime;

/**
 * Generates a random position and shows the box.
 */
function showBox() {
  const top = Math.random() * (window.innerHeight - 150);
  const left = Math.random() * (window.innerWidth - 150);
  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.style.display = "block";
  box.style.backgroundColor = "tomato"; // reset color
  startTime = Date.now();
  message.textContent = "Click the box!";
}

/**
 * Starts the test after a random delay.
 */
function startGame() {
  const delay = Math.random() * 2000 + 1000; // 1-3 seconds
  box.style.display = "none";
  message.textContent = "Wait for the box to appear...";
  setTimeout(showBox, delay);
}

/**
 * Handles box click and calculates reaction time.
 */
box.addEventListener("click", () => {
  const reactionTime = (Date.now() - startTime) / 1000; // in seconds
  box.style.display = "none";
  box.style.backgroundColor = getRandomColor();
  reactionTimeDisplay.textContent = `Your Reaction Time: ${reactionTime.toFixed(3)} seconds`;
  message.textContent = "Wait for the next box...";
  startGame();
});

/**
 * Generates a random hex color.
 */
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start the game initially
startGame();
