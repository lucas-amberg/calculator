function add(num1, num2) {
    newNum = parseFloat(num1);
    newNum2 = parseFloat(num2);
    return checkAndRound(newNum + newNum2);
}
function subtract(num1, num2) {
    return checkAndRound(num1-num2);
}
function multiply(num1, num2) {
    return checkAndRound(num1*num2);
}
function divide(num1, num2) {
    if (num2 === 0 || num2 === "" || num2 === "0") {
        return 0;
    }
    return checkAndRound(num1/num2);
}

let firstNumber = "0";
let secondNumber = "";
let operator = "";

const display = document.querySelector(".display");
const zeroButton = document.querySelector(".button0");
const oneButton = document.querySelector(".button1");
const twoButton = document.querySelector(".button2");
const threeButton = document.querySelector(".button3");
const fourButton = document.querySelector(".button4");
const fiveButton = document.querySelector(".button5");
const sixButton = document.querySelector(".button6");
const sevenButton = document.querySelector(".button7");
const eightButton = document.querySelector(".button8");
const nineButton = document.querySelector(".button9");

const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const subtractButton = document.querySelector(".subtract");
const addButton = document.querySelector(".add");

const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const negativeButton = document.querySelector(".negative-positive");
const backspaceButton = document.querySelector(".backspace");

const decimalButton = document.querySelector(".decimal-button");

function operate(operator,num1,num2) {
    num2 === "" ? num2 = 0 : num2 = num2;
    switch (operator){
        case "+":
            return add(+num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

function addNumberToVariable(num, operator) {
    if (operator === "") {
        firstNumber === "0" ? firstNumber = num : firstNumber = firstNumber.concat(num);
    }
    else {
        secondNumber === "0" ? secondNumber = num : secondNumber = secondNumber.concat(num);
    }
}

function updateDisplay(num1, operator, num2) {
    if (operator === "") {
        display.textContent = num1;
    }
    else if (operator !== "") {
        display.textContent = `${num1} ${operator} ${num2}`
    }
    if (display.textContent === "0") {
        clearButton.textContent = "AC";
    }
    else {
        clearButton.textContent = "C";
    }
}

function addDecimalToNum() {
    if (operator !== "") {
        for (let i = 0; i < secondNumber.toString().length; i++) {
            if (secondNumber.toString()[i] === "." && secondNumber.toString()[secondNumber.toString().length - 1] !== ".") {
                return;
            }
        }
        if (secondNumber === "0" || secondNumber === "" || secondNumber === 0) {
            secondNumber = "0.";
        }
        else {
            if (secondNumber[secondNumber.length - 1] === ".") {
                secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            }
            else {
                secondNumber = secondNumber.toString().concat(".");
            }
        }
    }
    else {
        for (let i = 0; i < firstNumber.toString().length; i++) {
            if (firstNumber.toString()[i] === "." && firstNumber.toString()[firstNumber.toString().length - 1] !== ".") {
                return;
            }
        }
        if (firstNumber === "0" || firstNumber === "" || firstNumber === 0) {
            firstNumber = "0.";
        }
        else {
            if (firstNumber[firstNumber.length - 1] === ".") {
                firstNumber = firstNumber.slice(0, firstNumber.length - 1);
            }
            else {
                firstNumber = firstNumber.toString().concat(".");
            }
        }
    }
    updateDisplay(firstNumber, operator, secondNumber);
}

function checkAndRound(result) {
    let decimalFound = false;
    let decimalCount = 0;
    for (let i = 0; i < result.toString().length; i++) {
        if (result.toString()[i] === ".") {
            decimalFound = true;
            continue;
        }
        if (decimalFound === true) {
            decimalCount++;
        }
    }
    if (decimalCount > 4) {
        return result.toFixed(4);
    }
    else {
        return result;
    }
}

//Num button event listeners

zeroButton.addEventListener("click", () => {
    addNumberToVariable("0", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

oneButton.addEventListener("click", () => {
    addNumberToVariable("1", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

twoButton.addEventListener("click", () => {
    addNumberToVariable("2", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

threeButton.addEventListener("click", () => {
    addNumberToVariable("3", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

fourButton.addEventListener("click", () => {
    addNumberToVariable("4", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

fiveButton.addEventListener("click", () => {
    addNumberToVariable("5", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

sixButton.addEventListener("click", () => {
    addNumberToVariable("6", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

sevenButton.addEventListener("click", () => {
    addNumberToVariable("7", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

eightButton.addEventListener("click", () => {
    addNumberToVariable("8", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

nineButton.addEventListener("click", () => {
    addNumberToVariable("9", operator);
    updateDisplay(firstNumber, operator, secondNumber);
});

//Operator button event listeners

addButton.addEventListener("click", () => {
    if (operator === "") {
        operator = "+";
        updateDisplay(firstNumber, operator, secondNumber);
    }
    else if (secondNumber === "") {
        return;
    }
    else {
        firstNumber = operate(operator, firstNumber, secondNumber);
        operator = "+";
        secondNumber = "";
        updateDisplay(firstNumber, operator, secondNumber);
    }
});

subtractButton.addEventListener("click", () => {
    if (operator === "") {
        operator = "-";
        updateDisplay(firstNumber, operator, secondNumber);
    }
    else if (secondNumber === "") {
        return;
    }
    else {
        firstNumber = operate(operator, firstNumber, secondNumber);
        operator = "-";
        secondNumber = "";
        updateDisplay(firstNumber, operator, secondNumber);
    }
});

multiplyButton.addEventListener("click", () => {
    if (operator === "") {
        operator = "*";
        updateDisplay(firstNumber, operator, secondNumber);
    }
    else if (secondNumber === "") {
        return;
    }
    else {
        firstNumber = operate(operator, firstNumber, secondNumber);
        operator = "*";
        secondNumber = "";
        updateDisplay(firstNumber, operator, secondNumber);
    }
});

divideButton.addEventListener("click", () => {
    if (operator === "") {
        operator = "/";
        updateDisplay(firstNumber, operator, secondNumber);
    }
    else {
        firstNumber = operate(operator, firstNumber, secondNumber);
        operator = "/";
        secondNumber = "";
        updateDisplay(firstNumber, operator, secondNumber);
    }
});

equalButton.addEventListener("click", () => {
    if (operator !== "") {
        firstNumber = operate(operator, firstNumber, secondNumber);
        operator = "";
        secondNumber = "";
        updateDisplay(firstNumber, operator, secondNumber);
    }
    else {
        return;
    }
});

clearButton.addEventListener("click", () => {
    if (operator !== "" && secondNumber !== "") {
        secondNumber = "";
    }
    else {
        firstNumber = "0";
        operator = "";
    }
    updateDisplay(firstNumber, operator, secondNumber);
});

negativeButton.addEventListener("click", () => {
    if (operator === "") {
        firstNumber = firstNumber * -1;
    }
    else {
        secondNumber = secondNumber * -1;
    }
    updateDisplay(firstNumber, operator, secondNumber);
});

backspaceButton.addEventListener("click", () => {
    if (firstNumber === "") {
        firstNumber = 0;
    }
    else if (secondNumber !== "") {
        if (secondNumber.length === 1) {
            secondNumber = 0;
        }
        else {
            secondNumber = secondNumber.toString().slice(0, -1);
        }
    }
    else if (firstNumber === 0) {
        firstNumber = 0;
    }
    else if (firstNumber.length === 1) {
        firstNumber = 0;
    }
    else {
        firstNumber = firstNumber.toString().slice(0, -1);
    }
    updateDisplay(firstNumber, operator, secondNumber);
})

decimalButton.addEventListener("click", () => {
    addDecimalToNum();
});