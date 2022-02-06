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

function equal() {
  if (typeof n1 !== "undefined" && typeof n2 !== "undefined") {
    if (typeof operation !== "undefined") {
      result = operate(operation, n1, n2);
      console.log(result);
    }
  }
  operation = undefined;
  n1 = result;
  n2 = undefined;
}

const calcButtons = document.querySelectorAll(".buttons .calc");
let val = "";
calcButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (val.includes(".") && e.target.textContent === ".") {
      return;
    }
    val = val.concat(e.target.textContent);
    console.log(val);
  })
);

const operators = document.querySelectorAll(".buttons .operator");
let operation;
let n1;
let n2;
let result;
operators.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (typeof n1 === "undefined") {
      n1 = Number(val);
      val = "";
    } else if (typeof n2 === "undefined" && val !== "") {
      n2 = Number(val);
      val = "";
    }
    if (e.target.classList.contains("add")) {
      console.log("+");
      operation = add;
    }
    if (e.target.classList.contains("subtract")) {
      console.log("-");
      operation = subtract;
    }
    if (e.target.classList.contains("multiply")) {
      console.log("*");
      operation = multiply;
    }
    if (e.target.classList.contains("divide")) {
      console.log("/");
      operation = divide;
    }
    if (typeof n1 !== "undefined" && typeof n2 !== "undefined") {
      if (e.target.classList.contains("add")) {
        operation = add;
        equal();
      }
      if (e.target.classList.contains("subtract")) {
        operation = subtract;
        equal();
      }
      if (e.target.classList.contains("multiply")) {
        operation = multiply;
        equal();
      }
      if (e.target.classList.contains("divide")) {
        operation = divide;
        equal();
      }
    }
  })
);

const equalButton = document.querySelector(".buttons .equal");
equalButton.addEventListener("click", equal);

// TODO: add display, add clear, add percent, add negative positive
