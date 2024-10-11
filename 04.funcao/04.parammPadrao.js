// Estrategia 01 para gerar um valor padrão

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(1, 2, 3))
console.log(soma1())
console.log(soma1(1, 2))
console.log(soma1(1))
console.log(soma1(0, 0, 0)) // irá retornar o valor 3 pois considera 0 como valor falso

// estrategia 02, 03, 04 para gerar valores padrão
console.log('=================================================')

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // verificando se existe um valor no array posicao [1]
    c = isNaN(c) ? 1 : c // se não for um numero vai paraa o padrão se nao vai para o c
    return a + b + c
}

console.log(soma2(1, 2, 3))
console.log(soma2())
console.log(soma2(1, 2))
console.log(soma2(1))
console.log(soma2(0, 0, 0))

// Valor padrão do es2015
console.log('=================================================')

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(1, 2, 3))
console.log(soma2())
console.log(soma2(1, 2))
console.log(soma2(1))
console.log(soma2(0, 0, 0))