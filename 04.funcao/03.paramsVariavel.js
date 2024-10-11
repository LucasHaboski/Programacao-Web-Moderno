function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
} // arguments é um array interno, quando nenhum aprametro é passado, esse array está vazio

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))

console.log(soma(5,2,4," Teste")) // Ele aceita e concatena a string
console.log(soma('L','u','c','a','s')) // vai aparecer 0 por conta do valor inicial da soma



