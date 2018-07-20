window.onload = function(){
    document.getElementById('enter').addEventListener('click', process);
}

const operators = ['+','-','*','/'];
let stack = [];

function process(event){
    const input = document.getElementById('calculator-entry').value;
    if(!isNaN(input)){
        stack.push(input);
    }
    else if(operators.filter(operator => operator === input).length === 1){
        const result = eval(`${stack.pop()}${input}${stack.pop()};`)
        console.log('Result: ', result);
        document.getElementById('result').innerHTML = null;
        const resultContainer = document.createElement('p');
        const resultOutput = document.createTextNode(result);
        resultContainer.appendChild(resultOutput);
        document.querySelector('#result').appendChild(resultContainer);
        stack.push(result);
    }
    else {
        console.log('bogus input..try again');
    }
    clearInputField();
}

function clearInputField(){
    document.getElementById('calculator-entry').value = null;
}