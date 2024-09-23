console.log(Math.floor(7.4))

const obj1 = {}
obj1.nome = 'Quadro'
//obj1['nome'] = 'Mesa'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Teclado')
const obj3 = new Obj('Mouse')
console.log(obj2.nome)
console.log(obj3.nome)
