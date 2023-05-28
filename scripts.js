let bottomDisplay = document.querySelector(".bottomDisplay");
bottomDisplay.textContent = "0";
let topDisplay = document.querySelector(".topDisplay");

let number1 = "";
let number2 = "";
let currentOperator = "";
let justCalculated = false;
let errorCheck = "";
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

const undo = document.querySelector("#undo");
const decimal = document.querySelector("#decimal");

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
    if (x === 0 && y === 0)
    {
        return "Error";
    }
    else if (x != 0 && y === 0)
    {
        return "Infinity... Nice Try.";
    }
    return x / y;
}

function multiply(x, y)
{
    return x * y
}

function operate(x, y, operator)
{
    x = parseFloat(x);
    y = parseFloat(y);
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
        if (number === "." && justCalculated === true)
        {
            justCalculated = false;
            concatBottomDisplay(number);
            concatNumberVariables(number);
        }
        else if (number === "." && bottomDisplay.textContent === "0")
        {
            concatBottomDisplay(number);
            concatNumberVariables(number);
        }
        else if (bottomDisplay.textContent === "0" || justCalculated === true || bottomDisplay.textContent === "Error" || bottomDisplay.textContent === "Infinity... Nice Try.")
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
    updateTopDisplay(number1, number2, currentOperator);
    if (result != "Error" && result != "Infinity... Nice Try.")
    {
        result = parseFloat(result).toPrecision(12);
        result = Number(result);
        result = result.toString();
    }
    else
    {
        errorCheck = result;
        currentOperator = "";
    }
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

function errorTextCheck(operation)
{
    if (errorCheck != "Error" && errorCheck != "Infinity... Nice Try.")
    {
        errorCheck = "";
        currentOperator = operation;
        operatorCheck();
    }
    errorCheck = "";
}

function setZero()
{
    number1 = "0";
    bottomDisplay.textContent = "0";
    return;
}

function operatorUpdates()
{
    currentNumber = 2;
    justCalculated = false;
    return;
}

function undoOperatorCheck()
{
    string = bottomDisplay.textContent;
    if (string.slice(-1) === " ")
    {

    }
}

function toPercent(number)
{
    number = number * .01;
    number = parseFloat(number).toPrecision(12);
    number = Number(number);
    number = number.toString();
    return number;
}

function toggleNegativeNumber(number)
{
    number = number * -1;
    number = number.toString();
    return number;
}

function updateOnlySecond()
{

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

function clearEvent()
{
    bottomDisplay.textContent = "0";
    topDisplay.textContent = "";
    currentOperator = "";
    number1 = "0";
    number2 = "";
    currentNumber = 1;
}

function plusEvent()
{
    if (number1 === "" || number1 === "Error" || number1 === "Infinity... Nice Try.")
    {
        setZero();
        updateForAddition();
    }
    if (currentOperator === "")
    {
        updateForAddition();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        errorTextCheck("add");
    }
}

function subtractEvent()
{
    if (number1 === "" || number1 === "Error" || number1 === "Infinity... Nice Try.")
    {
        setZero();
        updateForSubtraction();
    }
    if (currentOperator === "")
    {
        updateForSubtraction();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        errorTextCheck("subtract");
    }
}

function multiplyEvent()
{
    if (number1 === "" || number1 === "Error" || number1 === "Infinity... Nice Try.")
    {
        setZero();
        updateForMultiplication();
    }
    if (currentOperator === "")
    {
        updateForMultiplication();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        errorTextCheck("multiply");
    }
}

function divideEvent()
{
    if (number1 === "" || number1 === "Error" || number1 === "Infinity... Nice Try.")
    {
        setZero();
        updateForDivision();
    }
    if (currentOperator === "")
    {
        updateForDivision();
    }
    else if (number2 != "")
    {
        let chaining = true;
        calculate(chaining);
        errorTextCheck("divide");
    }
}

function equalsEvent()
{
    if (currentOperator != "" && number2 != "")
    {
        calculate();
    }
}

function decimalEvent()
{
    if (currentNumber === 1 && number1.indexOf(".") === -1)
    {
        updateBottomDisplay(".");
    }
    else if (currentNumber === 2 && number2.indexOf(".") === -1)
    {
        updateBottomDisplay(".");
    }
}

function undoEvent()
{
    isCharacterOperator = undoOperatorCheck();
    
    if (bottomDisplay.textContent != "0")
    {
        if (bottomDisplay.textContent.slice(-1) != " ")
        {
            bottomDisplay.textContent = bottomDisplay.textContent.slice(0, -1);
            if (currentNumber === 1)
            {
                number1 = bottomDisplay.textContent
            }
            else if (currentNumber === 2)
            {
                number2 = number2.slice(0, -1);
            }
        }
        else if (bottomDisplay.textContent.slice(-1) === " ")
        {
            bottomDisplay.textContent = bottomDisplay.textContent.slice(0, -3);
            currentOperator = "";
            currentNumber = 1;
        }
        
        if (bottomDisplay.textContent.slice(-1) === "-")
        {
            bottomDisplay.textContent = bottomDisplay.textContent.slice(0, -1);
            number2 = "";
        }
    }

    if (bottomDisplay.textContent === "")
    {
        bottomDisplay.textContent = "0";
        number1 = "0";
    }
}

function percentEvent()
{
    if (currentNumber === 1)
    {
        number1 = toPercent(number1);
        bottomDisplay.textContent = number1;
    }
    else if (currentNumber === 2 && bottomDisplay.textContent.slice(-1) != " ")
    {
        number2Length = number2.length;
        bottomDisplay.textContent = bottomDisplay.textContent.slice(0, -number2Length);
        number2 = toPercent(number2);
        bottomDisplay.textContent = bottomDisplay.textContent.concat(number2);
    }
}

function toggleNegativeEvent()
{
    if (currentNumber === 1)
    {
        number1 = toggleNegativeNumber(number1);
        bottomDisplay.textContent = number1;
    }
    else if (currentNumber === 2 && bottomDisplay.textContent.slice(-1) != " ")
    {
        number2Length = number2.length;
        bottomDisplay.textContent = bottomDisplay.textContent.slice(0, -number2Length);
        number2 = toggleNegativeNumber(number2);
        bottomDisplay.textContent = bottomDisplay.textContent.concat(number2);
    }
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
    clearEvent();
});

plusButton.addEventListener("click", () => {
    plusEvent();
});

subButton.addEventListener("click", () => {
    subtractEvent();
});

multiplyButton.addEventListener("click", () => {
    multiplyEvent();
});

divideButton.addEventListener("click", () => {
    divideEvent();
});

equalsButton.addEventListener("click", () => {
    equalsEvent();
});

decimal.addEventListener("click", () => {
    decimalEvent();
});

undo.addEventListener("click", () => {
    undoEvent();
});

percent.addEventListener("click", () => {
    percentEvent();
});

toggleNegative.addEventListener("click", () => {
    toggleNegativeEvent();
});

document.addEventListener("keydown", (event)  => {
    console.log(event)
    if (event.key === "1") {updateBottomDisplay("1");};
    if (event.key === "2") {updateBottomDisplay("2");};
    if (event.key === "3") {updateBottomDisplay("3");};
    if (event.key === "4") {updateBottomDisplay("4");};
    if (event.key === "5") {updateBottomDisplay("5");};
    if (event.key === "6") {updateBottomDisplay("6");};
    if (event.key === "7") {updateBottomDisplay("7");};
    if (event.key === "8") {updateBottomDisplay("8");};
    if (event.key === "9") {updateBottomDisplay("9");};
    if (event.key === "0") {updateBottomDisplay("0");};

    if (event.key === ".") {decimalEvent();};
    if (event.key === "/") {divideEvent();};
    if (event.key === "*") {multiplyEvent();};
    if (event.key === "-") {subtractEvent();};
    if (event.key === "+") {plusEvent();};
    if (event.key === "Enter") {equalsEvent();};
    if (event.key === "Escape" || event.key === "Delete") {clearEvent();};
    if (event.key === "Backspace") {undoEvent();};
});