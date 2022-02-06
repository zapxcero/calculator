class Calculator {
  constructor(prevElement, currentElement) {
    this.prevElement = prevElement;
    this.currentElement = currentElement;
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }
  clear() {
    this.currentOperand = "";
    this.prevOperan = this.currentOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNum(num) {
    if (num === "." && this.currentOperand.includes(".")) return;
    this.currentOperand += num.toString();
  }
  chooseOp(operation) {
    if (this.currentOperand === "") return;
    if (this.prevOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let result;
    const prev = Number(this.prevOperand);
    const current = Number(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.prevOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.currentElement.textContent = this.currentOperand;
    if (this.operation !== undefined) {
      this.prevElement.textContent = `${this.prevOperand} ${this.operation}`;
    }
  }
}

const prevElement = document.querySelector(".prev");
const currentElement = document.querySelector(".current");

const calculator = new Calculator(prevElement, currentElement);

const numButtons = document.querySelectorAll(".buttons .calc");
numButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.appendNum(button.textContent);
    calculator.updateDisplay();
  })
);

const operationButtons = document.querySelectorAll(".buttons .operator");
operationButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.chooseOp(button.textContent);
    calculator.updateDisplay();
  })
);

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

const allClearButton = document.querySelector(".ac");
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
