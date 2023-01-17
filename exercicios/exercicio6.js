/*EXERCÍCIO 6 - Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

//Juros simples:
const jurosSimples = (capital, juros, tempo) => {
    return `Juros Simples: R$ ${(capital * juros * tempo/100).toFixed(2)}`.replace('.', ',')
}

console.log(jurosSimples(45, 98, 36))

//Juros Compostos:
const jurosCompostos = (capital, juros, tempo) =>{
    const montante = capital * ((1 + juros) ** tempo)
    const jurosTotal = montante - capital
    return `Montante: R$ ${capital * ((1 + juros) ** tempo)} e os Juros Totais: R$ ${jurosTotal}`
}

console.log(jurosCompostos(1000, 1.0, 2.0))