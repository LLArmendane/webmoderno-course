/*EXERCÍCIO 1: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

const soma = (a,b) =>  a + b
const subtracao = (a,b) =>  a - b
const divisao = (a,b) =>  a / b
const multiplicacao = (a,b) =>  a * b

console.log(soma(2,3))
console.log(subtracao(2,3))
console.log(divisao(2,0))
console.log(multiplicacao(2,3))


const calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => {
        if (b === 0) {
            return "Não é possível fazer divisão por 0"
        }
    
        return a / b
    } 
}

console.log(calculadora.soma(2,3))
console.log(calculadora.subtracao(2,3))
console.log(calculadora.divisao(2,0))
console.log(calculadora.multiplicacao(2,3))

