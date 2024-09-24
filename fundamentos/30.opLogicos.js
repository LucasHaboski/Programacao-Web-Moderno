function compras(freela1, freela2) {
    const comprarComida = freela1 || freela2
    const comprarIphone = freela1 && freela2
    const comprarSamsung = freela1 != freela2
    const ficarEmCasa = !comprarComida // Operador unário

    return {comprarComida, comprarIphone, comprarSamsung, ficarEmCasa}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))