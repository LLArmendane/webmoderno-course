function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//let opcao = 0 - Com o DO/WHILE não é necessário atribuir um valor inicial 
let opcao

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)

console.log('Até a próxima.')