let num1=parseInt(prompt("Digite o primeiro número:"));
let num2=parseFloat(prompt("Digite o segundo número:"));
let operacao=prompt("Digite a operação: [+] para Adição | [-] para Subtração | [X] para Multiplicação | [/] para Divisão");



if (isNaN(num1) || isNaN(num2)){
resultado = 0;
alert('Operação inválida!');
}
else if (operacao == '+'){
resultado=num1+num2;
} else if (operacao == '-'){
resultado=num1-num2;
}else if (operacao == 'x'){
resultado=num1*num2;
}else if (operacao === '/'){
resultado=num1/num2;
}else {
resultado='Operação inválida, digite uma operação válida!'
}

document.write('<p class="resultado">O resultado da operação é:</p>',resultado);
