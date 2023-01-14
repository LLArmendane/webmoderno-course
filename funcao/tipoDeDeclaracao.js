//function declaration:  funções declaradas previamente, independente da ordem
function soma(x, y){
    return x + y
}

//function expression: só pode ser chamada após ser declarada
const sub = function(x, y){
    return x - y
}

//named function expression: só pode ser chamada depois da declaração
const mult = function mult (x, y){
    return x * y
}