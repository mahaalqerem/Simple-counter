// Get the counter element
var counterElement = document.getElementById('counter');

// Get the increment and decrement buttons
var incrementButton = document.getElementById('incrementBtn');
var decrementButton = document.getElementById('decrementBtn');

// Initialize the passenger count
var passengerCount = 0;

// Update the counter display
function updateCounter() {
  counterElement.innerText = passengerCount;
}

// Increment the passenger count
function incrementCount() {
  passengerCount++;
  updateCounter();
}

// Decrement the passenger count
function decrementCount() {
  if (passengerCount > 0) {
    passengerCount--;
    updateCounter();
  }
}

// Add event listeners to the buttons
incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);

// Update the initial counter display
updateCounter();
