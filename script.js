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

numButtons.forEach(button =>
	button.addEventListener("click", () => addNumber(button.textContent))
);

operButtons.forEach(button =>
	button.addEventListener("click", () => addOperator(button.textContent))
);

function addNumber(number) {
	display.textContent += number;
}

function addOperator(oper) {
	display.textContent += oper;
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
