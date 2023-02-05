/*
    Capturar 2 números
    e fazer as operações matemáticas
    de soma, subtração, multiplicação
    divisão e resto da divisão
*/

alert('Calculating two numbers');

let numberOne = prompt('Write a number: ');
let numberTwo = prompt('Write other number: ');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const div = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + mult);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + rest);