const notas = [5.5, 8.9, 4.3, 2.2, 10.0]

for (let i in notas) {
    console.log(i, notas[i])
}

const funcionarios = {
    nome: 'Lucas',
    sobrenome: 'Haboski',
    peso: 68.4,
    idade: 20
}

for(let atributo in funcionarios) {
    console.log(`${atributo} = ${funcionarios[atributo]}`)
}