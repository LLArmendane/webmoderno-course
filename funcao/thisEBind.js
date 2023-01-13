//---Forma 1
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        //Acessar o atributo desse objeto (THIS OBJECT)
        console.log(this.saudacao)
    }
}

pessoa.falar()


//---Forma 2
//Bind amarra a função com o This, nesse caso = bind(object)
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//Se for arrowFunction, não precisa do .Bind
function pessoa2(){
    this.idade = 0

    const self = this//Não precisa usar o bind

    setInterval(function(){
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa2

