let firstNumber = 0;
let secondNumber = 0;
let currentOperator = undefined;

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