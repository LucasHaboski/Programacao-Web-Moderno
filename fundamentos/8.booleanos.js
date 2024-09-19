let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //dupla negação para virar 'boolean'

isAtivo = 0
console.log(!!isAtivo) 

console.log('Os verdadeiros: ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos: ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar: ')
console.log(!!('' || null || 0 || ' '));

//Interessante para quando caso um valor seja nulo, printar erro, assim realizando a proteção do código
let nome = ''
console.log(nome || 'Desconhecido')
