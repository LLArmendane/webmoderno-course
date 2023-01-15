/*EXERCÍCIO 2 - Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const tipoTriangulo = (a, b, c) => {
    if (a === b && b === c) {
        console.log(`Com os lados ${a}, ${b}, ${c}, o triângulo é equilátero`)
    } else if (a != b && b != c) {
        console.log(`Com os lados ${a}, ${b}, ${c}, o triângulo é escaleno.`)
    } else {
        console.log(`Com os lados ${a}, ${b}, ${c}, o triângulo é isósceles.`)
    }
}

tipoTriangulo(2,2,2)
tipoTriangulo(2,2,3)
tipoTriangulo(1,2,3)

function triangulo (a, b, c) {
    if (a === b && b === c)
        return `Com os lados ${a}, ${b}, ${c}, o triângulo é equilátero`
    if (a != b && b != c)
        return`Com os lados ${a}, ${b}, ${c}, o triângulo é escaleno.`

    return `Com os lados ${a}, ${b}, ${c}, o triângulo é isósceles.`
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 2, 3))
console.log(triangulo(1, 2, 3))