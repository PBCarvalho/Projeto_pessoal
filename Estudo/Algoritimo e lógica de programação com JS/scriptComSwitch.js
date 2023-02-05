/*
    Capturar 2 números
    e fazer as operações matemáticas
    de soma, subtração, multiplicação
    divisão e resto da divisão
*/

alert('Calculating two numbers')

let numberOne = prompt('Write a number: ');
let numberTwo = prompt('Write other number: ');

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let option = prompt('Which operation? (+, -, *, / or %)')

let sum;

switch(option) {
    case '+':
        sum = numberOne + numberTwo;
        break;
    case '-':
        sum = numberOne - numberTwo;
        break;
    case '*':
        sum = numberOne * numberTwo;
        break;
    case '/':
        sum = numberOne / numberTwo;
        break;
    case '%':
        sum = numberOne % numberTwo;
        break;
    default:
        alert('Opção inválida')
}
alert('Result of the calc is: ' + sum)