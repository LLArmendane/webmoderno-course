const obj = {nome: 'Roberto'}

function tratarErro(erro){
    throw('Deu Erro!')
}

function nomeGritado(obj){
    try{
        //Erro no nome da variável
        console.log(obj.name.toUpperCase() + '!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log("Fim da execução.")
    }
    
}

nomeGritado(obj)


