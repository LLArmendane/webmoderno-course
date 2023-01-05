const PESO1 = 1.1
const PESO2 = 2.0

console.log(PESO1, PESO2)
console.log(Number.isInteger(PESO1))//Não é inteiro
console.log(Number.isInteger(PESO2))//É inteiro

const AVALIACAO1 = 9.871
const AVALIACAO2 = 6.871

const TOTAL = AVALIACAO1 * PESO1 + AVALIACAO2 * PESO2
const MEDIA = TOTAL / (PESO1 + PESO2)

console.log(MEDIA.toFixed(2))//2 casas após a virgula
console.log(MEDIA.toString())//Retorna o valor original
console.log(MEDIA.toString(2))//Em binário


//--------------Cuidados:
console.log(7/0)//INFINITY
console.log('10.2'/2)//CONVERTE O 10 EM NUMÉRICO
console.log('3'+ 2)//CONCATENA - 32
console.log('Legal' * 2)//NaN - NOT A NUMBER
console.log(0.1 + 0.7)//IMPRECISÃO
console.log((10.38645).toFixed(2));//SEM CHAMAR VARIÁVEL

//MATH - Raio da Circunferência
const RAIO = 5.6
const AREA = Math.PI * Math.pow(RAIO, 2)

console.log(AREA)
console.log(typeof Math)//Objeto

// const {pow} = Math
// console.log(pow(RAIO, 2))





