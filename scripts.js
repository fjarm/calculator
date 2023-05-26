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

function operatorCheck()
{
    switch(currentOperator)
    {
        case "add":
            updateForAddition()
            break;
        case "subtract":
            updateForSubtraction()
            break;
        case "multiply":
            updateForMultiplication()
            break;
        case "divide":
            updateForDivision()
            break;
        default:
            return;    
    }
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

function calculate(chaining)
{
    result = operate(number1, number2, currentOperator);
    result = result.toFixed(5);
    updateTopDisplay(number1, number2, currentOperator);
    bottomDisplay.textContent = result;
    number1 = result;
    number2 = "";
    if (!chaining)
    {
        currentOperator = "";
    }
    currentNumber = 1;
    justCalculated = true;
    return;
}

function operatorUpdates()
{
    currentNumber = 2;
    justCalculated = false;
    return;
}

function updateForAddition()
{
    concatBottomDisplay(" + ")
    currentOperator = "add";
    operatorUpdates()
}

function updateForSubtraction()
{
    concatBottomDisplay(" - ")
    currentOperator = "subtract";
    operatorUpdates()
}

function updateForMultiplication()
{
    concatBottomDisplay(" x ")
    currentOperator = "multiply";
    operatorUpdates()
}

function updateForDivision()
{
    concatBottomDisplay(" / ")
    currentOperator = "divide";
    operatorUpdates()
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
    currentOperator = "";
    number1 = 0;
    number2 = "";
});

plusButton.addEventListener("click", () => {
    if (number1 === "")
    {
        number1 = 0;
    }
    if (currentOperator === "")
    {
        updateForAddition();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        currentOperator = "add"
        operatorCheck();
    }
});

subButton.addEventListener("click", () => {
    if (number1 === "")
    {
        number1 = 0;
    }
    if (currentOperator === "")
    {
        updateForSubtraction();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        currentOperator = "subtract"
        operatorCheck();
    }
});

multiplyButton.addEventListener("click", () => {
    if (number1 === "")
    {
        number1 = 0;
    }
    if (currentOperator === "")
    {
        updateForMultiplication();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        currentOperator = "multiply"
        operatorCheck();
    }
});

divideButton.addEventListener("click", () => {
    if (number1 === "")
    {
        number1 = 0;
    }
    if (currentOperator === "")
    {
        updateForDivision();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        currentOperator = "divide"
        operatorCheck();
    }
});

equalsButton.addEventListener("click", () => {
    if (currentOperator != "" && number2 != "")
    {
        calculate();
    }
});