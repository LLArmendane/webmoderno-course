//-------Exemplo 1
function soma1(a, b, c){
    a = a || 1 //1 é o valor padrão, caso a não seja definido, o resultado será 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(2, 3, 4), soma1(3), soma1(3, 2, 0))


//------Exemplo 2
function soma2(a, b, c){
    // Se A for diferente de Undefined, ele assume o valor de a, se não = 1
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //*FORMA MAIS SEGURA

    return a + b + c
}
//Assume o valor zero
console.log(soma2(), soma2(9, 0, 0), soma2(2))


//------Exemplo 3: *MELHOR OPÇÃO (MAIS RECENTE)
//Assume o valor zero
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3, 4))