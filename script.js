let operator = "";
let firstNumberGlobal = "";
let secondNumber = "";
let negativeFirstNumber = false;
let subsequentOperation = false;

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
      negativeFirstNumber = false;
      firstNumberGlobal = result;
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
        if(operator === "" && subsequentOperation === false){
            firstNumberGlobal += button.textContent;
            displayValue = firstNumberGlobal;
        }else{
            secondNumber += button.textContent;
            displayValue = secondNumber;
            subsequentOperation = false;
        }
        displayText.textContent = displayValue;
        console.log("firstnumber: " + firstNumberGlobal);
        console.log("secondnumber: " + secondNumber);
    });
});

operatebuttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(button.textContent === "-" && firstNumberGlobal === ""){
            negativeFirstNumber = true;
            // displayText.textContent = `-${firstNumberGlobal}`;
        }else if(firstNumberGlobal != "" && secondNumber != ""){
            subsequentOperation = true;
            operator = button.textContent;
            secondNumber = "";
        }else{
            operator = button.textContent;
            if(negativeFirstNumber){
                displayText.textContent = `-${firstNumberGlobal}`
            }
        }
    });
});

equalButton.addEventListener(("click"), () => {
    displayText.textContent = operate(operator,firstNumberGlobal,secondNumber)
    console.log(firstNumberGlobal);
});

cButton.addEventListener(("click"), () => {
    displayText.textContent = "";
    firstNumberGlobal = "";
    secondNumber = "";
    operator = "";
    negativeFirstNumber = false;
});
