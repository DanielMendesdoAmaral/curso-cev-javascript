function contar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var div = window.document.getElementById("termos")

    if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0) { //Se o valor tiver 0 elementos. Se o comprimento dos caracteres for igual 0. Essa é a lógica do length.
        div.innerHTML = "Impossível contar"
        window.alert("[ERRO!] Faltam dados.") 
    } 
    else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo==0) {
            passo=1
            window.alert("O passo será considerado como 1.")
        }
        div.innerHTML = "Contando...<br><br>"
        if (inicio<fim) {
            for (var contador = inicio; contador<=fim; contador += passo) {
                div.innerHTML += `${contador} \u{1F449}`
            } 
            div.innerHTML += `\u{1F3C1}`
        }
        else {
            for (contador=inicio; contador>=fim; contador -= passo) {
                div.innerHTML += `${contador} \u{1F449}`
            }
            div.innerHTML += `\u{1F3C1}`
        }
    }
}