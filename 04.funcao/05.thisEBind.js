const pessoa = {
    saudacao: 'Ola!!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: fncional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()