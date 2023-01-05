//DESTRUCTURING DE OBJETO:
const pessoa = {
    nome: 'Laura',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 200
    }
}

//-----OBTER VALOR DO MODO TRADICIONAL
const nome2 = pessoa.nome
console.log(nome2)

//-----OBTER VALORES PELO DESTRUCTURING
const {nome, idade} = pessoa
console.log(nome, idade)

//Criando uma variável para receber o valor dos atributos
const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)

//Destructuring com Objeto
function rand ({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())

//Destructuring com Array
function rand2 ([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//arredondamento para baixo
}

console.log(rand2([50, 40]))



    

