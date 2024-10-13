function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // a cada x milisegundo ele dispara a função (nesse caso)
}

new Pessoa