function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 77])) // Numero random entre 50 e 77
console.log(rand([777])) //Numero random entre 777 e max predefinido (1000)
console.log(rand([, 234])) // Numero random entre min predefinido (0) e 234
console.log(rand([])) // Numero random no intervalo predefinido