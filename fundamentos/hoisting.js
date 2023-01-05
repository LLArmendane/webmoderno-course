//HOISTING: Mover a declaração para o topo automaticamente, mesmo não tendo sido declarada

//-----VAR
console.log(a)//undefined
var a = 2
console.log(a)//2

/*
 CÓDIGO ACIMA:
 var a
 console.log(a)
 a = 2
 console.log(a)

*/

function teste(){
    console.log(b)
    var b = 2
    console.log(b)
}

teste()

//LET: Não possui içamento(hoisting) com LET

