function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function updateDisplay() {
  input.textContent = displayValue;
}

const input = document.querySelector(".input");
let displayValue = "";

const calcButtons = document.querySelectorAll(".buttons .calc");

// suppose add 1 and 2

// click button 1
// store num to firstNum and display-value
// parse the num first
// click plus operation
// click button 2
// click equals
// display result
//
// every time a num button is pressed, call updateDisplay
//
