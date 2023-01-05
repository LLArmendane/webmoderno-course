//-------------------------COM VAR
//Exemplo 1:
for(var i = 0; i < 10; i ++){
    console.log(i)
}
//Assim que a condição fica falsa, sai do bloco
console.log('i = ', i)// 10


//Exemplo 2:
var funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//10 - pois não respeita a variavel que não tem escopo de bloco
funcs[8]()//10



//------------------------COM LET
//Exemplo 1:
for(let i = 0; i < 10; i ++){
    console.log(i)
}
//i só está visível dentro do bloco
console.log('i = ', i)//ERROR


//Exemplo 2:
const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//2 - respeita o escopo
funcs[8]()//8