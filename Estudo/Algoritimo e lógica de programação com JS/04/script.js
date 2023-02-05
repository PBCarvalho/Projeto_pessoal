/*
    Solicitar o nome do aluno e as 3 notas
    do bimestre, calcular a média daquele aluno.

    Média 6

    Se o aluno passou no bimestre, dar os
    parabéns.

    Se o aluno não passou no bimestre,
    motivar o aluno a dar seu melhor na prova de 
    recuperação.

    Em ambos os casos, mostre uma mensagem com o
    nome do aluno e a nota.
*/

let studant = prompt('Nome do aluno:');

alert('Informe as notas!');

let firstNote = prompt('Primeira nota: ');
let seccondNote = prompt('Segunda nota: ');
let thirdNote = prompt('Terceira nota:  ');

firstNote = Number(firstNote);
seccondNote = Number(seccondNote);
thirdNote = Number(thirdNote);

let avarage = (firstNote + seccondNote + thirdNote) / 3;

if(avarage >= 6) {
    alert('Parabéns '+ studant +', você foi aprovado com média '+ avarage);
} else {
    alert(studant +', infelizmente você não passou, ficou com média '+ avarage +'. Mas anime-se, estude para se sair bem na recuperação!');
};