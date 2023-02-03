let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//adicionar um item no começo
techs.unshift("sql")
//remover um item do fim
techs.pop()
//remover um item no começo
techs.shift()
//pegar somente alguns elementos do array -> "html" e "css" 
//console.log(techs.slice(1, 3))
//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)
//encontrar a posição de um elemento no array
let index = techs.indexOf("html")
techs.splice(index, 1)


console.log(techs)