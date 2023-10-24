// Get element values
let input = document.getElementById("display");
let value = document.getElementById("mirror");
let resultDisplay = document.getElementById("result");

// Function to clear the input, mirrored value, and result display
function clearInput() {
    input.value = '';
    value.textContent = '0';
    resultDisplay.textContent = '0';
}

// Function to append an operator to the input and update the mirrored value
function appendOperator(operator) {
    input.value += operator;
    value.textContent = input.value;
}

// Function to calculate the result and display it or show an error
function calculateResult() {
    try {
        const expression = input.value;
        const result = eval(expression);
        resultDisplay.textContent = "Result: " + result;
        value.textContent = input.value;
    } catch (error) {
        resultDisplay.textContent = 'Error';
    }
}
