// Select the HTML element with the id 'counter' to display the counter value.
const counterDisplay = document.getElementById('counter');

// Select the button with the class 'btn_decrease' for the decrement function.
const decreaseButton = document.querySelector('.btn_decrease');

// Select the button with the class 'btn_reset' for the reset function.
const resetButton = document.querySelector('.btn_reset');

// Select the button with the class 'btn_increase' for the increment function.
const increaseButton = document.querySelector('.btn_increase');

// Initialize the counter variable to 0. This variable will hold the current counter value.
let counter = 0;

/**
 * Updates the counter display and sets the text color based on the counter's value.
 * - If the counter is negative, the text color becomes red.
 * - If the counter is positive, the text color becomes green.
 * - If the counter is zero, the text color becomes black.
 */
function updateCounter() {
    // Update the displayed text of the counter element to the current value of `counter`.
    counterDisplay.textContent = counter;

    // Change the text color based on the value of the counter.
    if (counter < 0) {
        // If the counter value is less than 0, set the text color to red.
        counterDisplay.style.color = 'red';
    } else if (counter > 0) {
        // If the counter value is greater than 0, set the text color to green.
        counterDisplay.style.color = 'green';
    } else {
        // If the counter value is exactly 0, set the text color to black.
        counterDisplay.style.color = 'black';
    }
}

// Add a click event listener to the decrement button.
// When clicked, this will decrease the counter value by 1.
decreaseButton.addEventListener('click', () => {
    counter--; // Decrease the counter value by 1.
    updateCounter(); // Update the counter display after decrementing.
});

// Add a click event listener to the reset button.
// When clicked, this will reset the counter value to 0.
resetButton.addEventListener('click', () => {
    counter = 0; // Reset the counter value to 0.
    updateCounter(); // Update the counter display after resetting.
});

// Add a click event listener to the increment button.
// When clicked, this will increase the counter value by 1.
increaseButton.addEventListener('click', () => {
    counter++; // Increase the counter value by 1.
    updateCounter(); // Update the counter display after incrementing.
});
