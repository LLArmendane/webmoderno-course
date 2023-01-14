const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //TRAZ OS VALORES DE ONDE ELA FOI DEFINIDA - GLOBAL
}

exec()