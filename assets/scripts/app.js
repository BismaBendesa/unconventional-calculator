// this is the current result
let currentResult = 0; 

// parse the user input to float
let parseUserInput = function (){
    const userInputString= userInput.value;
    const userInputNumber = parseFloat(userInputString);
    return userInputNumber;
}

// this function responsible to create calculation log
let createCalculationLog = function (operator, numberInputed){
    if (isNaN(numberInputed)){
        return alert("Please input a valid number!");
    } else{
        return `${currentResult} ${operator} ${numberInputed}`;
    }
}

// add button clicked
function onClickedAddBtn(){
    addCalculation = createCalculationLog("+", parseUserInput());
        if(isNaN(parseUserInput())){
            return;
        }
    currentResult += parseUserInput();
    outputResult(currentResult, addCalculation);
    console.log(userInput.value);
}

// subtract button clicked
function onClickedSubtractBtn(){
    subtractCalculation = createCalculationLog("-", parseUserInput());
    if(isNaN(parseUserInput())){
        return;
    }
    currentResult -= parseUserInput();
    outputResult(currentResult, subtractCalculation);
    console.log(userInput.value);
}

// multiply button clicked
function onClickedMultiplyBtn(){
    multiplyCalculation = createCalculationLog("*", parseUserInput());
    if(isNaN(parseUserInput())){
        return;
    }
    currentResult *= parseUserInput();
    outputResult(currentResult, multiplyCalculation);
    console.log(userInput.value);
}

// Divide button clicked
function onClickedDivideBtn(){
    divideCalculation = createCalculationLog("/", parseUserInput());
    if(isNaN(parseUserInput())){
        return;
    }
    currentResult /= parseUserInput();
    outputResult(currentResult, divideCalculation);
    console.log(userInput.value);
}

// Event for each button
addBtn.addEventListener('click', onClickedAddBtn);
subtractBtn.addEventListener('click', onClickedSubtractBtn);
multiplyBtn.addEventListener('click', onClickedMultiplyBtn);
divideBtn.addEventListener('click', onClickedDivideBtn);
