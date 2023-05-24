let bottomDisplay = 0;
let topDisplay = 0;
let currentOperator = undefined;

const zero  = document.querySelector("#0")
const one   = document.querySelector("#1");
const tw0   = document.querySelector("#2");
const three = document.querySelector("#3");
const four  = document.querySelector("#4");
const five  = document.querySelector("#5");
const six   = document.querySelector("#6");
const seven = document.querySelector("#7");
const eight = document.querySelector("#8");
const nine  = document.querySelector("#9");

const clear = document.querySelector("clear");
const toggleNegative = document.querySelector("#plusminus");
const percent = document.querySelector("percent");

const plusButton = document.querySelector("plus");
const subButton = document.querySelector("minus");
const multiplyButton = document.querySelector("multiply");
const divideButton = document.querySelector("divide");
const equalsButton = document.querySelector("equals");

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
    switch(operator)
    {
        case "add":
            add(x, y);
            break;
        case "subtract":
            subtract(x, y);
            break;
        case "divide":
            divide(x, y);
            break;
        case "multiply":
            multiply(x, y);
            break;
        default:
            return;
    }
}