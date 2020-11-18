const number = document.querySelectorAll('#number');
const operation = document.querySelectorAll('#operation');
const equal = document.querySelector('#equal');
const del = document.querySelector('#ac');
const display = document.querySelector('#visor');
let numeroDisplay = '';
let digit;
let parcial = 0;
let total = 0;
let op;

//ADICIONA O CLICK PARA CADA NÚEMRO DA CALCULADORA
number.forEach((e) => {
    e.addEventListener('click', el => {
        digit = el.target.value;
        mostrarDisplay(digit);
        display.innerHTML = numeroDisplay;
    })
});

//MOSTRA NA TELA OS NÚMEROS DIGITADOS
function mostrarDisplay(digito) {
    if (digito === '.' && numeroDisplay.includes('.')) {
        return
    }
    numeroDisplay += digito;
    return numeroDisplay;
};


//ADICIONA A FUNÇÃO DE APAGAR TODOS OS DADOS DA CALCULADORA
del.addEventListener('click', () => {
    numeroDisplay = '';
    total = 0;
    parcial = 0;
    display.innerHTML = '0';
});

//DEFINE QUAL A OPERAÇÃO QUE ESTÁ SENDO REQUSITADA
operation.forEach(e => {
    e.addEventListener('click', el => {
        op = el.target.value;
        parcial = parseFloat(numeroDisplay);
        numeroDisplay = '';
    });
});


//RETORNA O RESULTADO NA TELA
equal.addEventListener('click', () => {
    equalCalc();
    if(!isFinite(total)) {
        display.innerHTML = (total = 0);
    }else if (Number.isInteger(total)) {
        display.innerHTML = total;
    } else display.innerHTML = total.toFixed(2);

});


//TRATA AS OPERAÇÕES REQUISITADAS E RETORNA O TOTAL
function equalCalc() {

    switch (op) {
        case '+':
            if (!parcial) {
                total += parseFloat(numeroDisplay);
            } else total += (parcial + parseFloat(numeroDisplay));
            break;
        case '-':
            if (!parcial) {
                total -= parseFloat(numeroDisplay);
            } else total += (parcial - parseFloat(numeroDisplay));
            break;
        case '*':
            if (!parcial) {
                total *= parseFloat(numeroDisplay);
            } else total += (parcial * parseFloat(numeroDisplay));
            break;
        case '/':
            if (!parcial) {
                total /= parseFloat(numeroDisplay);
            } else total += (parcial / parseFloat(numeroDisplay));
            break;
        default: total = parcial
        }

    parcial = 0;
    numeroDisplay = '';
    return total;
};


