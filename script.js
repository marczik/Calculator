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
const allButtons = document.querySelectorAll("button");

const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let result = 0;

numButtons.forEach(button =>
	button.addEventListener("click", () => addNumber(button.textContent))
);

operButtons.forEach(button =>
	button.addEventListener("click", () => addOperator(button.textContent))
);

clearButton.addEventListener("click", clearDisplay);

backButton.addEventListener("click", backNumber);

equalButton.addEventListener("click", calculation);

allButtons.forEach(button =>
	button.addEventListener("mousemove", () => mouseMove(button))
);

allButtons.forEach(button =>
	button.addEventListener("mouseleave", () => mouseMoveLeave(button))
);

function addNumber(number) {
	if (display.textContent === "0") {
		resetDisplay();
	}
	display.textContent += number;
}

function addOperator(oper) {
	let newDisplayText = display.textContent.split("");
	const searchAddOperator = "+";
	const searchSubtractOperator = "-";
	const searchMultiplyOperator = "*";
	const searchDivideOperator = "/";

	const indexOfAdd = newDisplayText.indexOf(searchAddOperator);
	const indexOfSubtract = newDisplayText.indexOf(searchSubtractOperator);
	const indexOfMultiply = newDisplayText.indexOf(searchMultiplyOperator);
	const indexOfDivide = newDisplayText.indexOf(searchDivideOperator);

	if (
		indexOfAdd > 0 ||
		indexOfSubtract > 0 ||
		indexOfMultiply > 0 ||
		indexOfDivide > 0
	) {
		calculation();
	}
	firstNumber = display.textContent;
	display.textContent += oper;
}

function clearDisplay() {
	display.textContent = "0";
}

function resetDisplay() {
	display.textContent = "";
}

function backNumber() {
	if (display.textContent.length === 1) {
		clearDisplay();
	} else {
		display.textContent = display.textContent.slice(0, -1);
		console.log(display.textContent);
	}
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
		let stringAfterOperand = arrayAfterOperand.join("");
		secondNumber = stringAfterOperand;
		operate(firstNumber, secondNumber, "add");
	} else if (indexOfSubtract > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfSubtract + 1);
		let stringAfterOperand = arrayAfterOperand.join("");
		secondNumber = stringAfterOperand;
		operate(firstNumber, secondNumber, "subtract");
	} else if (indexOfMultiply > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfMultiply + 1);
		let stringAfterOperand = arrayAfterOperand.join("");
		secondNumber = stringAfterOperand;
		operate(firstNumber, secondNumber, "multiply");
	} else if (indexOfDivide > 0) {
		arrayAfterOperand = newDisplayText.slice(indexOfDivide + 1);
		let stringAfterOperand = arrayAfterOperand.join("");
		secondNumber = stringAfterOperand;
		operate(firstNumber, secondNumber, "divide");
	}
}

function mouseMove(button) {
	button.classList.add("change-size");
}

function mouseMoveLeave(button) {
	button.classList.remove("change-size");
}

function operate(x, y, operator) {
	x = Number(x);
	y = Number(y);

	if (operator == "add") {
		result = x + y;
	} else if (operator == "subtract") {
		result = x - y;
	} else if (operator == "multiply") {
		result = x * y;
	} else if (operator == "divide") {
		result = x / y;
	}
	console.log(result);
	resetDisplay();
	display.textContent = result;
}
