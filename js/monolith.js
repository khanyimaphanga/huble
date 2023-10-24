window.onload = function () {

const logoContainer = document.querySelector('#logo-slider');

// Initialize a variable to track whether the animation is paused
let isPaused = false;

// Add an event listener for the "mouseover" event
logoContainer.addEventListener('mouseover', () => {
    // When the mouse hovers over the element
    isPaused = true; // Set the animation pause flag to true
    logoContainer.style.animationPlayState = 'paused'; // Pause the slider
});

// Add an event listener for the "mouseout" event
logoContainer.addEventListener('mouseout', () => {
    // When the mouse moves out of the element
    isPaused = false; // Set the animation pause flag to false
    logoContainer.style.animationPlayState = 'running'; // Resume the slider
});
};
