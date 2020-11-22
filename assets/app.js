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
    if (digito === '.' && values[indice].includes('.')) {
        return
    }
    let clearScreen = values[indice] === '0' || clearDisplay;
    let currentValue = clearScreen ? '' : values[indice];
    values[indice] = currentValue + digito;

    if (digito != '.') {
        const newValue = parseFloat(values[indice])
        values[indice] = newValue;
    }
};

operation.forEach((e => {
    e.addEventListener('click', e => {
        if (indice === 0) {
            opt = e.target.value;
            indice = 1;
            clearScreen = true;
        } else {
            let equals = opt === '=';
            let currentOpt = opt;
            try {
                values[0] = eval(`${values[0]} ${opt} ${values[1]}`);
            } catch (error) {
                values[0] = values[0]
            }
            values[1] = 0;
            updateDisplay(values[0]);
            indice = equals ? 0 : 1;
            clearScreen = true;
        }

        if(opt == '=') {
            opt = null;
            values[1] = 0;
        }
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







