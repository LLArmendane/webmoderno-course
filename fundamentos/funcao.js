class Produto{}
console.log(typeof Produto)//Classe é função

console.log(typeof Object)//Objeto é função

//------------------------------------------

//---Função sem retorno:
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2)//NaN
imprimirSoma(5, 4)//9
imprimirSoma(4, 10, 5, 6)//Soma os 2 primeiros: 14

//---Função com retorno:
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3))//2+3
console.log(soma(2))//2+0
console.log(soma)//NaN

//TIPOS DE FUNÇÃO: 

//Armazenando uma função em uma variável
const imprimirSoma2 = function (a, b){
    console.log(a + b)
}
imprimirSoma2(2,3)

//Armazenando uma função arrow em uma variável
const somaConst = (a, b) => {
    return a + b
}
console.log(somaConst(2, 5))

//Retorno Implícito
const subtracao = (a, b) => a - b
console.log(subtracao(6,1))

const imprimir2 = a => console.log(a)
imprimir2('Legal')