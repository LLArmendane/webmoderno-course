//Agrupar varios valores de forma linear em uma estrutura só
const valores = [7.7, 8.9, 9, 10]
console.log(valores[0], valores[3])

valores[4] = 5
console.log(valores)
console.log(valores.length)

//PUSH - Array recebe vários tipos de valores: obj, bool, null, string...
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//POP - Tira o ultimo elemento do Array
console.log(valores.pop())

//DELETE - Exclui o VALOR do indice, não o indice
delete valores[2]//fica empty
console.log(valores)

console.log(typeof valores)//obj




