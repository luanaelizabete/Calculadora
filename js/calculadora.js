let resultado;
let mensagem = 'O resultado da operação é '; //declarando e atribuindo

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação: [+] para Adição | [-] para Subtração | [X] para Multiplicação | [/] para Divisão");



if (isNaN(num1) == true || isNaN(num2) == true) {    //is NaN Not a Number -> retorna verdadeiro ou falso
    alert('Operação inválida!');  //mostrando um alert
    resultado = 'erro ao relizar operação';  //mostrando na tela
}
else if (operacao == '+') {
    resultado = num1 + num2;
} else if (operacao == '-') {
    resultado = num1 - num2;
} else if (operacao == 'x') {
    resultado = num1 * num2;
} else if (operacao === '/') {
    resultado = num1 / num2;
} else {
    resultado = 'Operação inválida, digite uma operação válida!'
}

document.write('<p class="resultado"> ', resultado); //p -> classe para executar o resultado 
document.write('</p>');
