//VERIFICANDO ARRAY

function lista(n, l) {
    if (l.indexOf(n) != -1) {
        return `O número ${n} existe no array.`
    }

    else {
        return `O número ${n} não existe no array.`
    }
}

var array = [8, 9, 10]

console.log(lista(8, array))
console.log(lista(7, array))