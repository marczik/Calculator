const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const dotButton = document.querySelector("#dot");
const equalButton = document.querySelector("#equal");
const backButton = document.querySelector("#back");
const clearButton = document.querySelector("#clear");

const numButtons = document.querySelectorAll("[data-num]");
const operButtons = document.querySelectorAll("[data-oper]");

const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";

numButtons.forEach(button =>
	button.addEventListener("click", () => addNumber(button.textContent))
);

operButtons.forEach(button =>
	button.addEventListener("click", () => addOperator(button.textContent))
);

clearButton.addEventListener("click", clearDisplay);

equalButton.addEventListener("click", calculation);

function addNumber(number) {
	if (display.textContent === "0") {
		resetDisplay();
	}
	display.textContent += number;
}

function addOperator(oper) {
	firstNumber = display.textContent;
	display.textContent += oper;
}

function clearDisplay() {
	display.textContent = "0";
}

function resetDisplay() {
	display.textContent = "";
}

function calculation() {
	let newDisplayText = display.textContent.split("");
	let arrayAfterOperand = [];
	const searchAddOperator = "+";
	const searchSubtractOperator = "-";
	const searchMultiplyOperator = "*";
	const searchDivideOperator = "/";

	const indexOfAdd = newDisplayText.indexOf(searchAddOperator);
	const indexOfSubtract = newDisplayText.indexOf(searchSubtractOperator);
	const indexOfMultiply = newDisplayText.indexOf(searchMultiplyOperator);
	const indexOfDivide = newDisplayText.indexOf(searchDivideOperator);

	if (indexOfAdd > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfAdd + 1);
	} else if (indexOfSubtract > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfSubtract + 1);
	} else if (indexOfMultiply > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfMultiply + 1);
	} else if (indexOfDivide > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfDivide + 1);
	}

	let stringAfterOperand = arrayAfterOperand.join("");
	secondNumber = stringAfterOperand;
	console.log(secondNumber);
}

function operate(x, y, operator) {
	if (operator == "add") {
		add(x, y);
	} else if (operator == "subtract") {
		subtract(x, y);
	} else if (operator == "multiply") {
		multiply(x, y);
	} else if (operator == "divide") {
		divide(x, y);
	}
}

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}
