//EX1

function parOuImpar(n) {
    if (n%2==0) {
        return "Par"
    }
    else {
        return "Ímpar"
    }
}

var resposta = parOuImpar(15)

console.log(resposta)





//EX2

function soma(a = 0, b = 0) { //Coloque que eles recebem 0, pois se o usuário não passar nenhum parâmetro não dará erro, ou se ele passar apenas um parâmetro, somará este parâmetro com 0.
    var soma = a + b
    return soma
}

var resultado = soma(7, 8)

console.log(resultado)





//EX 3 - Guardar uma função dentro de uma variável

var f = function(x) {
    return x*2
}

console.log(f(3))





//EX 4 - Função recursiva, que chama ela mesmo

function fatorial(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))