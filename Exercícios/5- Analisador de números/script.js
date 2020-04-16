function add() {
    var resultados = window.document.getElementById("resultados") 
    resultados.innerHTML = "" //Limpa a section dos resultados

    var numero = window.document.getElementById("entrada")
    var sel = window.document.getElementById("selecione")
    var entrada = window.document.getElementById("entrada")
    
    if (numero.value.length==0) {
        window.alert("ERRO! Faltam dados.")
        entrada.value = ""
    }
    
    else {

        numero = Number(numero.value)
        var opcao
        var numeros = []

        if (numero<1) {
            window.alert("ERRO! O número deve ser maior ou igual a 1.")
            entrada.value = ""
        }

        else if (numero>100) {
            window.alert("ERRO! O número deve ser menor ou igual a 100.")
            entrada.value = ""
        }

        else {
            var opt = document.createElement("option") //Cria um option
            sel.appendChild(opt) //Coloca o option dentro do select
        
            for (var c=0; c<sel.length; c++) { //Enquando c for menor que o número de options, ele percorre os options
                opcao = window.document.getElementsByTagName("option")[c] //A variável opcao recebe o primeiro option
                opcao = opcao.value //A variável opcao recebe o texto desse option, que é "Número n adicionado"
                var str = opcao.split(" ") //A variável str corta a string "Número n adicionado" e guarda o valor na posição 1
                
                if (numeros.indexOf(numero) != -1) { //Se já existir o número em algum option..
                    window.alert("ERRO! Número já inserido.")
                    opt.setAttribute("id", "remover") //Ele coloca o valor dentro do option 
                    var remover = document.getElementById("remover") 
                    remover.parentNode.removeChild(remover) //E remove o option que já foi criado e tem o valor repetido
                    break
                }

                else {
                    numeros[c] = Number(str[1]) //Se não ele armazena o valor numa variável
                    opt.innerHTML = `Número ${numero} adicionado.` //Escreve o valor dentro do option
                }
            }

            entrada.value = "" //Limpa o input
        }
    }
}

function fim() {
    var sel = window.document.getElementById("selecione")
    var numeros = []

    var quantidadeDeNumeros = 0
    var maior = 0
    var menor = 100
    var soma = 0
    var media = 0
    
    for (qtd=0; qtd<sel.length; qtd++) { //O contador acaba quando ele for menor que a quantidade máxima de elementos dentro do select (a quantidade de options existentes)
        opcao = window.document.getElementsByTagName("option")[qtd] //Pega o primeiro option e joga na variavel
        opcao = opcao.value //Pega o texto do option
        var str = opcao.split(" ") //Como o texto do option é "Número n adicionado", ele só pega o número, que quando cortado, fica na posição 1 do array str
        numeros[qtd] = Number(str[1]) //Transforma o número em Number

        quantidadeDeNumeros++

        if (numeros[qtd] > maior) {
            maior = numeros[qtd]
        }

        if (numeros[qtd] < menor) {
            menor = numeros[qtd]
        }

        soma += numeros[qtd]
    }

    var resultados = window.document.getElementById("resultados")
    resultados.innerHTML = "" //Limpa a section dos resultados

    if (quantidadeDeNumeros==0) { //Se clicar no botão "finalizar" sem ter colocado nenhum número, ele não deixa
        window.alert("ERRO! Digite um número para finalizar.")
    }

    else {
        var textos = window.document.createElement("h3") //Cria um h3 
        resultados.appendChild(textos) //Joga o h3 na div com id resultados
        textos.innerHTML = `Ao todo temos ${quantidadeDeNumeros} números cadastrados`

        var textos = window.document.createElement("h3") //Cria um h3 
        resultados.appendChild(textos) //Joga o h3 na div com id resultados
        textos.innerHTML = `O maior número informado foi ${maior}`

        var textos = window.document.createElement("h3") //Cria um h3 
        resultados.appendChild(textos) //Joga o h3 na div com id resultados
        textos.innerHTML = `O menor número informado foi ${menor}`

        var textos = window.document.createElement("h3") //Cria um h3 
        resultados.appendChild(textos) //Joga o h3 na div com id resultados
        textos.innerHTML = `Somando todos os números, temos ${soma}`

        media = soma/quantidadeDeNumeros

        var textos = window.document.createElement("h3") //Cria um h3 
        resultados.appendChild(textos) //Joga o h3 na div com id resultados
        textos.innerHTML = `A média dos números digitados é ${media}`
    }   
    
}