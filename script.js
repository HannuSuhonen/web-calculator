let operator = "";
let firstNumber = "";
let secondNumber = "";
let negativeFirstNumber = false;

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
    let result;
    switch (operator) {
        case "+":
            result = add(firstNumber,secondNumber);
            break;
        case "-":
            result = subtract(firstNumber,secondNumber);
            break;
        case "*":
            result = multiply(firstNumber,secondNumber);
            break;
        case "/":
            result = divide(firstNumber,secondNumber);
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
        displayText.textContent += button.textContent
        if(operator === ""){
            firstNumber = displayText.textContent;
        }else{
            secondNumber = displayText.textContent;
        }
        console.log("firstnumber: " + firstNumber);
        console.log("secondnumber: " + secondNumber);
    });
})

operatebuttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(button.textContent === "-" && firstNumber === ""){
            negativeFirstNumber = true;
        }else{
            operator = button.textContent;
            displayText.textContent = "";
        }
    });

})

function checkPrependOperation(){

}

equalButton.addEventListener(("click"), () => {
    firstNumber = negativeFirstNumber ? "-" + firstNumber : firstNumber;
    displayText.textContent = operate(operator,parseInt(firstNumber),parseInt(secondNumber))
});

cButton.addEventListener(("click"), () => {
    displayText.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
});
