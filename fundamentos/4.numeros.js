const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const prova1 = 9.8
const prova2 = 7.5

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // formata para 2 casas decimais nesse exemplo
console.log(media.toString(2)) //transforma em binário
console.log(typeof media)
