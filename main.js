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
    if (typeof result === "number" && e.target.textContent !== "0") {
      clearDisplay();
    }
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
    if (typeof firstNum !== "undefined") {
      if (typeof secondNum === "undefined") {
        secondNum = Number(displayValue);
        displayValue = "";
      }
    }
    if (typeof firstNum === "undefined") {
      firstNum = Number(displayValue);
      displayValue = "";
    }
    if (typeof firstNum !== "undefined" && typeof secondNum !== "undefined") {
      if (e.target.classList.contains("add")) {
        result = operate(add, firstNum, secondNum);
        clearDisplay();
        displayValue = result.toString();
        updateDisplay();
        firstNum = result;
        secondNum = undefined;
      }
      if (e.target.classList.contains("subtract")) {
        result = operate(subtract, firstNum, secondNum);
        clearDisplay();
        displayValue = result.toString();
        updateDisplay();
        firstNum = result;
        secondNum = undefined;
      }
      if (e.target.classList.contains("multiply")) {
        result = operate(multiply, firstNum, secondNum);
        clearDisplay();
        displayValue = result.toString();
        updateDisplay();
        firstNum = result;
        secondNum = undefined;
      }
      if (e.target.classList.contains("divide")) {
        result = operate(divide, firstNum, secondNum);
        clearDisplay();
        displayValue = result.toString();
        updateDisplay();
        firstNum = result;
        secondNum = undefined;
      }
    }
  })
);

// TODO: RESET EVERYTHING
