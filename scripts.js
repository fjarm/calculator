let bottomDisplay = document.querySelector(".bottomDisplay");
let topDisplay = 0;
let currentOperator = undefined;

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