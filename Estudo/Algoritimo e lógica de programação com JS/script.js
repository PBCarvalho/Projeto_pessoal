/*
    Jogo da adivinhação
    
    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório
    e verifique se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "ERRO, tente novamente!"

    Caso o usuário acerte o número, mostrar a mensagem:
    "Parabéns, você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas    
*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");

const randomNumber = Math.round(Math.random() * 10)
const match = Number(result) == randomNumber;

console.log(result, randomNumber, match)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt("ERRO, tente novamente!")
    xAttempts++
}

alert(`Parabéns, o número que pensei foi ${randomNumber} e você adivinhou em ${xAttempts} tentativas`)