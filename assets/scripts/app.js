let currentResult = 0; 

let parseUserInput = function (){
    const userInputString= userInput.value;
    const userInputNumber = parseInt(userInputString);
    return userInputNumber;
}

let createCalculationLog = function (operator, numberInputed){
    return `${currentResult} ${operator} ${numberInputed}`
}

function onClickedAddBtn(){
    addCalculation = createCalculationLog("+", parseUserInput());
    currentResult += parseUserInput();
    outputResult(currentResult, addCalculation);
    console.log(userInput.value);
}
function onClickedSubtractBtn(){
    subtractCalculation = createCalculationLog("-", parseUserInput());
    currentResult -= parseUserInput();
    outputResult(currentResult, subtractCalculation);
    console.log(userInput.value);
}
function onClickedMultiplyBtn(){
    multiplyCalculation = createCalculationLog("*", parseUserInput());
    currentResult *= parseUserInput();
    outputResult(currentResult, multiplyCalculation);
    console.log(userInput.value);
}
function onClickedDivideBtn(){
    divideCalculation = createCalculationLog("/", parseUserInput());
    currentResult /= parseUserInput();
    outputResult(currentResult, divideCalculation);
    console.log(userInput.value);
}

addBtn.addEventListener('click', onClickedAddBtn);
subtractBtn.addEventListener('click', onClickedSubtractBtn);
multiplyBtn.addEventListener('click', onClickedMultiplyBtn);
divideBtn.addEventListener('click', onClickedDivideBtn);
