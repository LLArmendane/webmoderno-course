function aprovacao(nota){
    if(nota >= 7){
        console.log("Aprovado = " + nota)
    }else{
        console.log("Reprovado = " + nota)
    }
}

aprovacao(0)

function teste1(num){
    if(num > 7){
        console.log(num)
    }

    console.log("Final.")
} 

teste1(4)//Vai direto para o final
teste1(8)