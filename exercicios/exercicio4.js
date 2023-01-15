/*EXERCÍCIO 4 - Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const divisao = (divisor, dividendo) => { 
    const divisao = divisor / dividendo
    const resto = divisor % dividendo

    return{
        divisao, resto
    }
}

console.log(`Divisão = ${divisao(5, 2).divisao} - Resto = ${divisao(5,2).resto}`)