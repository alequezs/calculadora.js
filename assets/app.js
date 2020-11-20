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

//ADICIONA O CLICK PARA CADA NÚEMRO DA CALCULADORA
number.forEach((e) => {
    e.addEventListener('click', el => {
        digit = el.target.value;
        mostrarDisplay(digit);
        updateDisplay(values[indice]);
    })
});

//MOSTRA NA TELA OS NÚMEROS DIGITADOS
function mostrarDisplay(digito) {
    if (digito === '.' && displayValue.includes('.')) {
        return
    }
    const clearScreen = displayValue === '0' || clearDisplay;
    const currentValue = clearScreen ? '' : displayValue;
    displayValue = currentValue + digito;

    if (digito != '.') {
        const newValue = parseFloat(displayValue)
        values[indice] = newValue;
    }
};

operation.forEach((e => {
    e.addEventListener('click', e => {
        opt = e.target.value;
        if (indice == 0) {
            displayValue = '0';
            indice = 1;
            clearScreen = true;
        } else {
            const currentOpt = opt;

            if (currentOpt == '+') {
                values[0] = (values[0] + values[1]);
            } else if (currentOpt == '-') {
                values[0] = (values[0] - values[1]);
            } else if (currentOpt == '*') {
                values[0] = (values[0] * values[1]);
            } else if (currentOpt == '/') {
                values[0] = (values[0] / values[1]);
            } else {
                equals = opt === '=';
                updateDisplay(values[0]);
            }
            opt = equals ? null : opt;
            indice = equals ? 0 : 1;
            clearScreen = !equals;
            displayValue = '0';
            values[1] = 0
        }


        updateDisplay(values[0]);
    })
}))


//ADICIONA A FUNÇÃO DE APAGAR TODOS OS DADOS DA CALCULADORA
del.addEventListener('click', () => {
    numeroDisplay = '';
    display.innerHTML = '0';
});







