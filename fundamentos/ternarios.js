//Ternário = Expressão (V ou F) + oq será retornado se for V  + oq será retornado se for F
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(4))