//Escopo global - Pode ser exibido fora do bloco
{{{{var sera = 'Será?'}}}}
console.log(sera)

/*VAR- Estando em uma função, não pode ser exibida
fora dela, pois deixa de estar no escopo global*/
function teste(){
    var local = 123
    console.log(local)
}

teste()//123
console.log(local)//ERRO!

//------------ EVITAR ESCOPO GLOBAL---------------
var numero = 1
{ 
    var numero = 2//alterou o valor de numero
    console.log('dentro = ', numero)//2
}
console.log('fora = ', numero)//2


//UTILIZANDO VAR E LET
var numero = 1
{
    //o valor do bloco é sempre priorizado
    let numero = 2
    console.log('dentro = ', numero)//2
}
console.log('fora = ', numero)//1