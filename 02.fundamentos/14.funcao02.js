// Armazenando uma função em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2 , 5)

// Armazenando uma arrow function em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 5))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(9, 2))