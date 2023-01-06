function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))//NaN
console.log(area())//NaN
console.log(area(2, 3, 22, 45))//Executa os 2 primeiros parametros
console.log(area(2, 13))//Retorna o ELSE