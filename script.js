// displayNumber1: The text that shows the current number
const displayNumber1 = document.getElementById("displayNumber");

// variables of calculator's buttons
const btn9 = document.getElementById("btn9");
const btn8 = document.getElementById("btn8");
const btn7 = document.getElementById("btn7");
const btn6 = document.getElementById("btn6");
const btn5 = document.getElementById("btn5");
const btn4 = document.getElementById("btn4");
const btn3 = document.getElementById("btn3");
const btn2 = document.getElementById("btn2");
const btn1 = document.getElementById("btn1");
const btn0 = document.getElementById("btn0");

const btnDot = document.getElementById("btnDot");
const btnTimes = document.getElementById("btnTimes");
const btnDivision = document.getElementById("btnDivision");
const btnMenos = document.getElementById("btnMenos");
const btnPlus = document.getElementById("btnPlus");
const btnEqual = document.getElementById("btnEqual");

// cache: storages the current number that the user wants to introduce
let cache = '';
let numberMemory = 0;
let operationMemory = '';


function pressNumber(number){
    if(number == '.' && cache.includes('.')) return;
    
    if (displayNumber1.textContent == '0') displayNumber1.textContent = number;
    else displayNumber1.textContent += number;
    cache += number;
    return;
}



function pressOperation(operation){

    function changeOperation(newOperation){
        displayNumber1.textContent = displayNumber1.textContent.slice(0, -3);
        displayNumber1.textContent += ' ' + newOperation + ' ';
        operationMemory = newOperation;
    }

    if (lastInputIsAnOperation()){
        changeOperation(operation);
        return;
    }
    
    function doOperation(){
        let result;
        switch (operationMemory){
            case '×':
                result = numberMemory * Number(cache);
                break;
            case '÷':
                result = numberMemory / Number(cache);
                break;
            case '-':
                result = numberMemory - Number(cache);
                break;
            case '+':
                 result = numberMemory + Number(cache);
                break;
        }
        operationMemory = '';
        cache = '';
        displayNumber1.textContent = result;
        numberMemory = result;
    }

    if(operationMemory.length > 0)
    {
        doOperation();
    } 
    else
    {
        numberMemory = Number(cache);
        cache = '';
    } 
    
    if(operation != '=')
    {
        displayNumber1.textContent += ' ' + operation + ' ';
        operationMemory = operation;
        return;
    }

    displayNumber1.textContent = String(numberMemory);
    cache = String(numberMemory);
    numberMemory = 0;
    
}

function lastInputIsAnOperation(){
    let operations = ['×', '÷', '-', '+'];
    let lastThing = displayNumber1.textContent.trim().slice(-1);
    
    return operations.includes(lastThing) ? true : false;
}

function deleteItem(){

    if(lastInputIsAnOperation()){
        displayNumber1.textContent = displayNumber1.textContent.slice(0, -3);
        operationMemory = '';
    }else{
        displayNumber1.textContent = displayNumber1.textContent.slice(0,-1);
        cache = cache.slice(0,-1);
    }
}

function resetAll(){
    cache = '';
    numberMemory = 0;
    operationMemory = '';
    displayNumber1.textContent = '0';
}
