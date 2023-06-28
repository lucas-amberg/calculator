function add(num1, num2) {
    return num1+num2;
}
function subtract(num1, num2) {
    return num1-num2;
}
function multiply(num1, num2) {
    return num1*num2;
}
function divide(num1, num2) {
    return num1/num2;
}

let firstNumber = "0";
let secondNumber = "0";
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

function operate(operator,num1,num2) {
    switch (operator){
        case "+":
            return add(num1,num2);
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