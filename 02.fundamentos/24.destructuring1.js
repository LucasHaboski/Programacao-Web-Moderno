// Novo recurso do ES2015

const cliente = {
    nome: 'Lucas',
    idade: 20,
    endereco: {
        logradouro: 'Rua Izidoro',
        numero: 224
    }
}

const { nome, idade } = cliente
console.log(nome, idade)

const { nome: n, idade: i} = cliente
console.log(n, i)

const { nomeDoPai, genero = true } = cliente
console.log(nomeDoPai, genero)

const { endereco: { logradouro, numero, cep }} = cliente
console.log(logradouro, numero, cep)

/*
const { conta: { numeroConta, banco }} = cliente
console.log(numeroConta, banco) // Vai gerar um erro pois não existe conta dentro de cliente
*/