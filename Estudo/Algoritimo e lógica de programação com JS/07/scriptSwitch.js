/*
    Faça um programa que tenha um menu e apresente a seguintre mensagem:

    Olá usuário! Digite o número da opção desejada
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
    
    
*/

let list = []

let option;

while(option != 3) {
    
    option = Number(prompt(`Olá usuário! Digite o número da opção desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))

    switch(option) {
        case 1:
            let item = prompt("Adicione um item: ")
            list.push(item)
            break;
        case 2:
            if(list.length == 0) {
                alert("Não existem itens cadastrados.")
            } else {
                alert(list)
            }
            break;
        case 3:
            alert("Aplicação está sendo encerrada!")
            break;
        default:
            alert("Option invalid!")
    }
}