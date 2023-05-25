let bottomDisplay = document.querySelector(".bottomDisplay");
bottomDisplay.textContent = "0";
let topDisplay = document.querySelector(".topDisplay");

let number1 = "";
let number2 = "";
let currentOperator = "";
let justCalculated = false;

let currentNumber = 1;

const zero  = document.querySelector("#zero");
const one   = document.querySelector("#one");
const tw0   = document.querySelector("#two");
const three = document.querySelector("#three");
const four  = document.querySelector("#four");
const five  = document.querySelector("#five");
const six   = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine  = document.querySelector("#nine");

const clear = document.querySelector("#clear");
const toggleNegative = document.querySelector("#plusminus");
const percent = document.querySelector("#percent");

const plusButton = document.querySelector("#plus");
const subButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function divide(x, y)
{
    return x / y;
}

function multiply(x, y)
{
    return x * y
}

function operate(x, y, operator)
{
    x = parseInt(x);
    y = parseInt(y);
    switch(operator)
    {
        case "add":
            return add(x, y);
        case "subtract":
            return subtract(x, y);
        case "divide":
            return divide(x, y);
        case "multiply":
            return multiply(x, y);
        default:
            return;
    }
}

function concatBottomDisplay(string)
{
    bottomDisplay.textContent = bottomDisplay.textContent.concat(string);
    return;
}

function updateTopDisplay(x, y, operator)
{
    let operatorString = " + ";
    switch(operator)
    {
        case "add":
            operatorString = " + ";
            break;
        case "subtract":
            operatorString = " - ";
            break;
        case "divide":
            operatorString = " / ";
            break;
        case "multiply":
            operatorString = " x ";
            break;
        default:
            operatorString = "";
            break;
    }
    topDisplay.textContent = x + operatorString + y;
}

function updateBottomDisplay(number)
{
    if (bottomDisplay.textContent.length < 100)
    {
        if (bottomDisplay.textContent === "0" || justCalculated === true)
        {
            justCalculated = false;
            bottomDisplay.textContent = number;
            setNumberVariables(number);
        }
        else
        {
            concatBottomDisplay(number);
            concatNumberVariables(number);
        }
    }
}

function setNumberVariables(number)
{
    if (currentNumber === 1)
    {
        number1 = number;
    }
    else if (currentNumber === 2)
    {
        number2 = number;
    }
    return;   
}

function concatNumberVariables(number)
{
    if (currentNumber === 1)
    {
        number1 = number1.concat(number);
    }
    else if (currentNumber === 2)
    {
        number2 = number2.concat(number);
    }
    return;
}

one.addEventListener("click", () => {
    updateBottomDisplay("1");
});

two.addEventListener("click", () => {
    updateBottomDisplay("2");
});

three.addEventListener("click", () => {
    updateBottomDisplay("3");
});

four.addEventListener("click", () => {
    updateBottomDisplay("4");
});

five.addEventListener("click", () => {
    updateBottomDisplay("5");
});

six.addEventListener("click", () => {
    updateBottomDisplay("6");
});

seven.addEventListener("click", () => {
    updateBottomDisplay("7");
});

eight.addEventListener("click", () => {
    updateBottomDisplay("8");
});

nine.addEventListener("click", () => {
    updateBottomDisplay("9");
});

zero.addEventListener("click", () => {
    updateBottomDisplay("0");
});

clear.addEventListener("click", () => {
    bottomDisplay.textContent = "0";
    topDisplay.textContent = "";
    number1 = 0;
});

plusButton.addEventListener("click", () => {
    if (number1 === "")
    {
        number1 = 0;
    }
    concatBottomDisplay(" + ")
    currentOperator = "add";
    currentNumber = 2;
    justCalculated = false;
});

equalsButton.addEventListener("click", () => {
    if (currentOperator != "")
    {
        result = operate(number1, number2, currentOperator);
        updateTopDisplay(number1, number2, currentOperator);
        bottomDisplay.textContent = result;
        number1 = result;
        number2 = "";
        currentOperator = "";
        currentNumber = 1;
        justCalculated = true;
    }
});