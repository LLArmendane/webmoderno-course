const escola = 'Esmeralda'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))//Pega a letra relacionada ao indice e informa o valor da tabela UniCode*
console.log(escola.indexOf('s'))
console.log(escola.substring(1))//smeralda
console.log(escola.substring(0,3))//Esm

console.log(escola.replace('me', 'mich'))
console.log(escola.replace(/\d/, 'mich'))//Caso a string possua um numero, será substituido 

console.log('Ana,Maria,Pedro'.split(','))//Divide em array a partir da virgula

//------TEMPLATE STRING

const nome = 'Rebeca'

//Precisa do espaço
const concatenacao = 'Olá ' + nome + '!'

//Não precisa do espaço (considera as quebras de linha)
const template = `Olá ${nome}!`
console.log(concatenacao,template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)
