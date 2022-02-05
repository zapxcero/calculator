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

function clearDisplay() {
  input.textContent = "";
  displayValue = "";
}

const input = document.querySelector(".input");
let displayValue = "";

const calcButtons = document.querySelectorAll(".buttons .calc");

calcButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    displayValue = displayValue.concat(e.target.textContent);
    updateDisplay();
  })
);

const clearButton = document.querySelector(".ac");
clearButton.addEventListener("click", clearDisplay);

let firstNum;
let secondNum;
let result;
const operatorButtons = document.querySelectorAll(".buttons .operator");
operatorButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    //if firstNum has number
    if (typeof firstNum === "undefined") {
      firstNum = Number(displayValue);
      clearDisplay();
    } else if (typeof secondNum === "undefined") {
      secondNum = Number(displayValue);
      clearDisplay();
    }
    if (e.target.classList.contains("add")) {
      result = operate(add, firstNum, secondNum);
    }
    if (e.target.classList.contains("subtract")) {
      result = operate(subtract, firstNum, secondNum);
    }
    if (e.target.classList.contains("multiply")) {
      result = operate(multiply, firstNum, secondNum);
    }
    if (e.target.classList.contains("divide")) {
      result = operate(divide, firstNum, secondNum);
    }
  })
);

// suppose add 1 and 2

// click button 1
// store num to firstNum and display-value
// parse the num first
// click plus operation
// click button 2
// click operates
// display result
//
// every time a num button is pressed, call updateDisplay
//
