let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//!- negação ---- !!- volta ao estado original
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Se o nome estiver vazio, retorna 'desconhecido'
let nome = 'Laura'
console.log(nome || 'desconhecido')