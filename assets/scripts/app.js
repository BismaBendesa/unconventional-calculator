let currentResult = 0; 

let parseUserInput = function (){
    const userInputString= userInput.value;
    const userInputNumber = parseInt(userInputString);
    return userInputNumber;
}

function onClickedAddBtn(){
    currentResult += parseUserInput();
    outputResult(currentResult, "");
    console.log(userInput.value);
}
function onClickedSubtractBtn(){
    currentResult -= parseUserInput();
    outputResult(currentResult, "");
    console.log(userInput.value);
}
function onClickedMultiplyBtn(){
    currentResult *= parseUserInput();
    outputResult(currentResult, "");
    console.log(userInput.value);
}
function onClickedDivideBtn(){
    currentResult /= parseUserInput();
    outputResult(currentResult, "");
    console.log(userInput.value);
}

addBtn.addEventListener('click', onClickedAddBtn);
subtractBtn.addEventListener('click', onClickedSubtractBtn);
multiplyBtn.addEventListener('click', onClickedMultiplyBtn);
divideBtn.addEventListener('click', onClickedDivideBtn);
