//Função que retorna um objeto

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())



function criarProduto(nome, preco){
    return{
        nome, 
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 2399))