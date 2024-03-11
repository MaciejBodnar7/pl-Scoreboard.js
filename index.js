let scoreOne = 0;
let scoreTwo = 0;

document.getElementById('score-one').textContent = scoreOne;
document.getElementById('score-two').textContent = scoreTwo;

let res1 = document.getElementById('score-one');
let res2 = document.getElementById('score-two');

function addMcu() {
  scoreOne += 1;
  res1.textContent = scoreOne;
}

function addChe() {
  scoreTwo += 1;
  res2.textContent = scoreTwo;
}

function reset() {
  scoreOne = 0;
  scoreTwo = 0;

  document.getElementById('score-one').textContent = scoreOne;
  document.getElementById('score-two').textContent = scoreTwo;

  clearInterval(intervalId);
  intervalId = null; // Reset the intervalId variable
  currentTimeInSeconds = 0;
  clockElement.textContent = '00:00';
}

// TIMER

// Set the total time for the football match in seconds (90 minutes = 5400 seconds)
const totalTimeInSeconds = 5400;
let currentTimeInSeconds = 0;
let intervalId; // Initialize the intervalId variable

// Get the clock div element
const clockElement = document.getElementById('clock');

// Function to update the clock display
function updateClockDisplay() {
  const minutes = Math.floor(currentTimeInSeconds / 60);
  const seconds = currentTimeInSeconds % 60;

  // Add leading zeros if necessary
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Update the clock display
  clockElement.textContent = formattedTime;
}

// Function to start the clock
function startClock() {
  if (!intervalId) {
    updateClockDisplay();
    intervalId = setInterval(function () {
      if (currentTimeInSeconds < totalTimeInSeconds) {
        currentTimeInSeconds++;
        updateClockDisplay();
      } else {
        // Match duration reached, you can perform additional actions here if needed
        clearInterval(intervalId);
        alert('Match Over!');
      }
    }, 1000);
  }
}
