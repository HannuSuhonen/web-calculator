let operator = "";
let firstNumber = "";
let secondNumber = "";
let negativeFirstNumber = false;

function add(a,b){
    console.log(a,b);
    return a + b;
}
function subtract(a,b){
    console.log(a,b);
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(operator,firstNumber,secondNumber){
    firstNumber = negativeFirstNumber ? "-" + firstNumber : firstNumber;
    let parsedFirstNumber = parseInt(firstNumber);
    let parsedSecondNumber = parseInt(secondNumber);
    let result;
    switch (operator) {
        case "+":
            result = add(parsedFirstNumber,parsedSecondNumber);
            break;
        case "-":
            result = subtract(parsedFirstNumber,parsedSecondNumber);
            break;
        case "*":
            result = multiply(parsedFirstNumber,parsedSecondNumber);
            break;
        case "/":
            result = divide(parsedFirstNumber,parsedSecondNumber);
            break;
        default:
            console.log("error");
      }
    return result;
}

const displayText = document.querySelector(".display-text");
const numberButtons = document.querySelectorAll(".number-button");
const operatebuttons = document.querySelectorAll(".operate-button");
const equalButton = document.querySelector(".equals-button");
const cButton = document.querySelector(".c-button");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let displayValue;
        if(operator === ""){
            firstNumber += button.textContent;
            displayValue = firstNumber;
        }else{
            secondNumber += button.textContent;
            displayValue = secondNumber;
        }
        displayText.textContent = displayValue;
        console.log("firstnumber: " + firstNumber);
        console.log("secondnumber: " + secondNumber);
    });
});

operatebuttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(button.textContent === "-" && firstNumber === ""){
            negativeFirstNumber = true;
        }else{
            operator = button.textContent;
            displayText.textContent = "";
        }
    });
});

equalButton.addEventListener(("click"), () => {
    displayText.textContent = operate(operator,firstNumber,secondNumber)
});

cButton.addEventListener(("click"), () => {
    displayText.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    negativeFirstNumber = false;
});
