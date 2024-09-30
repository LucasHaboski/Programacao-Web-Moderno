//par nome/valor
const primeiramsg = 'Olá, Mundo!' //contexto léxico 1

function exec(){
     const primeiramsg = 'OI, VISITANTE' // contexto léxico 2
     return primeiramsg
}

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Lucas',
    idade: 20,
    peso: 70,
    endereco: {
        logradouro: 'Rua Palmeiras',
        numero: 221
    }
}
console.log(primeiramsg)
console.log(exec())
console.log(Cliente)