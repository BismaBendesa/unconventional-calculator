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
    return `${currentResult} ${operator} ${numberInputed}`
}

// add buton clicked
function onClickedAddBtn(){
    addCalculation = createCalculationLog("+", parseUserInput());
    currentResult += parseUserInput();
    outputResult(currentResult, addCalculation);
    console.log(userInput.value);
}

// subtract button clicked
function onClickedSubtractBtn(){
    subtractCalculation = createCalculationLog("-", parseUserInput());
    currentResult -= parseUserInput();
    outputResult(currentResult, subtractCalculation);
    console.log(userInput.value);
}

// multiply button clicked
function onClickedMultiplyBtn(){
    multiplyCalculation = createCalculationLog("*", parseUserInput());
    currentResult *= parseUserInput();
    outputResult(currentResult, multiplyCalculation);
    console.log(userInput.value);
}

// Divide button clicked
function onClickedDivideBtn(){
    divideCalculation = createCalculationLog("/", parseUserInput());
    currentResult /= parseUserInput();
    outputResult(currentResult, divideCalculation);
    console.log(userInput.value);
}

// Event for each button
addBtn.addEventListener('click', onClickedAddBtn);
subtractBtn.addEventListener('click', onClickedSubtractBtn);
multiplyBtn.addEventListener('click', onClickedMultiplyBtn);
divideBtn.addEventListener('click', onClickedDivideBtn);
