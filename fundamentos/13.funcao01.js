// Função sem retorno:
function imprimirSoma(a, b){
    console.log(a + b)
}

let a = 5
let b = 3

imprimirSoma(a, b)
imprimirSoma(5, 3)

// Função com retorno:
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,4))
console.log(soma(2))
