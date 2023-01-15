/*EXERCÍCIO 5 - Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

const numero = (num) => `R$ ${num.toFixed(2)}`.replace('.',',')

console.log(numero(0.64849))