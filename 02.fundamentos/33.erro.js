function tratarErroELancar(erro) { // irá printar uma dessas opções caso dê algum erro
    // throw new error ('Ocorreu um erro!')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeCaps(obj) {
    try { // Testa se o código vai dar erro ou não
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Pega esse erro e neste caso joga para uma funcão
        tratarErroELancar(e)
    } finally { // Printa independete se der erro ou não
        console.log(e)
    }
}

const obj = { nome: 'Lucas'} // Da erro pois na função foi utilizado name e não nome
imprimirNomeCaps(obj)