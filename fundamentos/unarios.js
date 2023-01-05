let num1 = 1
let num2 = 2

num1++ //Pós fixada
console.log('num1 =', num1)

--num1 //Pré fixada - tem preferência
console.log('num1 =', num1)

console.log(++num1 === num2--)//num2 é decrementado APÓS a comparação