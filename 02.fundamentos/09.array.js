const valores = [7.7, 8.9, 9.2, 10.0]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 3.5
console.log(valores[4])
console.log(valores.length) // Mostra o tamanho do array

valores.push({id:3}, false, null, 'OLA') // JS permite criar arrays de tipos diferentes sem problemas
console.log(valores)

console.log(valores.pop()) // Tirar o ultimo valor do array
delete valores[5] // Deletar um elemento do array
console.log(valores)

console.log(typeof valores) //object