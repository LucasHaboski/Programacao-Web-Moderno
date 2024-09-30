let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)

const produto = {}
console.log(produto)

produto.preco = 3.66
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)
