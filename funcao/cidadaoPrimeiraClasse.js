//Criar de forma literal
function fun1(){}

//Armazenar função em variável
const fun2 = function(){}

//Armazenar em um Array
const array = [function(a, b){ return a + b }, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'JavaScript'}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})


//Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(`a = ${a} + b = ${b} + c = ${c} = `, a + b + c)
    }
}

//--- FORMA 1
soma(2, 3)(4)

//--- FORMA 2
const somaABC = soma(2,3)
somaABC(4)