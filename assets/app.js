const number = document.querySelectorAll('#number');
const operation = document.querySelectorAll('#operation');
const equal = document.querySelector('#equal');
const del = document.querySelector('#ac');
const display = document.querySelector('#visor');
let digit;
let displayValue = '0';
let clearDisplay = false;
let opt = null;
let values = [0, 0];
let indice = 0;

//ATUALIZA O VALOR DO DISPLAY SEMPRE QUE A PÁGINA RECARREGA OU UM VALOR É ALTERADO
function updateDisplay(currentValue) {
    display.innerHTML = currentValue;
}
updateDisplay(displayValue);

//ADICIONA O CLICK PARA CADA NÚMERO DA CALCULADORA
number.forEach((e) => {
    e.addEventListener('click', el => {
        digit = el.target.value;
        mostrarDisplay(digit)
        updateDisplay(displayValue)
        clearDisplay = false;
    })
});

//MOSTRA NA TELA OS NÚMEROS DIGITADOS
function mostrarDisplay(digito) {
    if (digito == '.' && displayValue.includes('.')) {
        return
    }

    clearDisplay = displayValue == '0' || clearDisplay
    const currentValue = clearDisplay ? '' : displayValue
    displayValue = currentValue + digito

    if (digito !== '.') {
        const newValue = parseFloat(displayValue)
        values[indice] = newValue
        console.log(values)
    }

    return displayValue;

};

operation.forEach((e => {
    e.addEventListener('click', e => {
        if (indice === 0) {
            indice = 1;
            clearDisplay = true;
            opt = e.target.value;
            if(values[0] !== 0) {return}
        } else {
            let equals = opt === '=';
            let currentValue = opt;
            if (opt === '+') {
                values[0] = values[0] + values[1]
            } else if (opt === '-') {
                values[0] = values[0] - values[1]
            } else if (opt === '*') {
                values[0] = values[0] * values[1]
            } else if (opt === '/') {
                values[0] = values[0] / values[1]
            }

            values[1] = 0;
            displayValue = values[0];
            opt = equals ? currentValue : e.target.value;
            indice = equals ? 1 : 1;
            clearDisplay = true;
            console.log(equals, opt, indice)
        }
        updateDisplay(displayValue);
    })
}))


//ADICIONA A FUNÇÃO DE APAGAR TODOS OS DADOS DA CALCULADORA
del.addEventListener('click', () => {
    displayValue = '0';
    clearDisplay = false;
    opt = null;
    values = [0, 0];
    indice = 0;
    updateDisplay('0');
});







