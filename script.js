let operator;
let firstNumber = "";
let secondNumber = "";

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(operator,firstNumber,secondNumber){
    switch (operator) {
        case "+":
            return add(firstNumber,secondNumber);
        case "-":
            return subtract(firstNumber,secondNumber);
        case "*":
            return multiply(firstNumber,secondNumber);
        case "/":
            return divide(firstNumber,secondNumber);
        default:
            console.log("error");
      }
      
}

const displayNumber = document.querySelector(".display-number");
const numberButtons = document.querySelectorAll(".number-button");
const operatebuttons = document.querySelectorAll(".operate-button");
const equalButton = document.querySelector(".equals-button");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayNumber.textContent += button.textContent;
    });
})

operatebuttons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        firstNumber = parseInt(displayNumber.textContent)
        displayNumber.textContent = "0";
    });
})

equalButton.addEventListener(("click"), () => {
    secondNumber = parseInt(displayNumber.textContent);
    displayNumber.textContent = operate(operator,firstNumber,secondNumber)
    console.log(operator);
    console.log(firstNumber);
    console.log(secondNumber);
});
