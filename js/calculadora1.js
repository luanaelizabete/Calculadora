//pegando o valor da caixa de texto via querySelector
console.log(dosument.querySelector('#numero1').value);
//pegando o valor da caixa de texto via getElementById
console.log(document.getElementById('numero1').value);

//pegando o valor da caixa de texto via getElementByTagName
//IMPORTANTE getElementByTagName retorna um array de tags
console.log(document.getElementByTagName('input')[0].value);

//pegando o valor da caixa de texto via getElementByClassName
//IMPORTANTE getElementByClassName retorna um array de elementos com a referencia classe
console.log(document.getElementsByClassName('form-input')[0].value);

//alterando valores de uma tag utilizando o innerHTML
document.getElementsByTagName('label')[0].innerHTML='Meu número';

//capturando os valores de uma tag utilizando o innerHTML
document.getElementsByTagName('label')[0].innerHTML;

function calcular(){
const primeiroNumero = parseFloat(document.formCalculadora.num1.value);
const segundoNumero = parseFloat(document.formCalculadora.num2.value);
const operacao = document.formCalculadora.oper.value;
let resultado;

if (operacao == '+') {
    resultado = primeiroNumero+segundoNumero;
}
else if (operacao == '-') {
    resultado = primeiroNumero-segundoNumero;
}
else if (operacao == 'x') {
    resultado = primeiroNumero*segundoNumero;
}
else if (operacao == '/') {
    resultado = primeiroNumero/segundoNumero;
}

//janela
//alert('O resultado da operação é ' + resultado);

//console log
//console.log('O resultado da operação é ',resultado);

//documento
//document.write('O resultado da operação é ',resultado);

const caixaResultado = document.getElementById('resultado').value;
caixaResultado.value = resultado;

const paragrafoResultado = document.getElementById('pResultado');
paragrafoResultado.innerHTML=resultado;

paragrafoResultado.style.color='blue';
paragrafoResultado.style.fontWeight='poppins';

}