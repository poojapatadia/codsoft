let currentInput = '';
let previousInput = '';
let operation = undefined;

const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput = currentInput.toString() + number.toString();
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    resultDisplay.innerText = currentInput;
    if (operation != null) {
        historyDisplay.innerText = `${previousInput} ${operation}`;
    } else {
        historyDisplay.innerText = '';
    }
}