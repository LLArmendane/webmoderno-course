let dobro = function (a){      
    return 2 * a
}
console.log(dobro(Math.PI))

dobro = (a)=> {
    return 2 * a    
}
console.log(dobro(Math.PI))

//Com um único parâmetro, não precisa dos parenteses
dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
console.log(ola())

ola = () => 'Olá!'
console.log(ola())

ola = _ => 'Olá!'//Possui um parametro
console.log(ola())

function pessoa(){
    this.idade = 0    

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)//tempo a ser acrescentado
}

new pessoa


//This mexe com escopo global - varia com a chamada
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {
    
}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
