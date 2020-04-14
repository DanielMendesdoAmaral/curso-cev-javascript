var num = [4,7,5,9]

num.push(1)
num[1] = 8

console.log(`Aqui está o array original: ${num}`)

console.log(`Aqui está o array organizado em ordem crescente: ${num.sort()}`)

console.log(`O array possui ${num.length} posições.`)

console.log(`O valor 4 está na posição de número ${num.indexOf(4)} no array organizado.`)

