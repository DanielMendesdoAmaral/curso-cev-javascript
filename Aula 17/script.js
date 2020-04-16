var amigo = {
    nome:"João",   
    sexo:"M",   
    idade:17,   
    peso:85.4,   
    engordar(p) {
        this.peso += p //this faz referência à um atributo
    }   
}

amigo.engordar(5)
console.log(`O meu amigo ${amigo.nome} pesa ${amigo.peso} quilogramas e tem ${amigo.idade} anos de idade.`)