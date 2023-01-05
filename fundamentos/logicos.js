//-------1) OPERANDO & (E, AND) *BINÁRIO*
/*
    TODAS as condições precisam ser VERDADEIRAS para que o resultado seja TRUE:
    TRUE + TRUE = TRUE
    TRUE + FALSE = FALSE
    FALSE + ? = FALSE 
*/

//-------2) OPERANDO || (OU, OR) *BINÁRIO*
/*
    Se uma das condições for VERDADEIRA, o resultado será TRUE:
    TRUE + TRUE = TRUE
    TRUE + FALSE = TRUE
    FALSE + ? = ? 
*/

//-------3) OPERANDO (XOR, OU EXCLUSIVO) *BINÁRIO*
/*
    As condições precisam ser DIFERENTES para que o resultado seja TRUE:
    TRUE + TRUE = FALSE
    TRUE + FALSE = TRUE
    FALSE + TRUE = TRUE
    FALSE + FALSE = FALSE
*/

//-------4) OPERANDO ! (NEGAÇÃO LÓGICA) *UNÁRIO*
/*
    Com o !, ele inverte o resultado:
    !TRUE = FALSE
    !FALSE = TRUE
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

