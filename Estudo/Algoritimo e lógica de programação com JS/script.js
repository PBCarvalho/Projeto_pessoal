/*
    Capture 10 itens para compor a lista de um supermercado
    Após capturar os 10 itens, impima-os, separando por vírgula.
*/

let array = [];

for (let i = 0; i < 10; i++) {
    let item = prompt("Informe um item: " + (i + 1));

    array.push(item);
};

alert(array);

alert(array[5])