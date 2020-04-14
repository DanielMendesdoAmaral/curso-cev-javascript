function gerar() {
    var fator = document.getElementById("fator")
    var select = document.getElementById("selecione")
    select.innerHTML = ""

    if (fator.value.length == 0) {
        window.alert("ERRO! Faltam dados.")
    }
    else {
        var fator = Number(fator.value)
        if (fator==0) {
            window.alert("O número tem que ser diferente de 0.")
        }
        else {
            for (var contador = 1; contador<=10; contador++) {   
                var produto = fator*contador
                var opcao = document.createElement("option")
                opcao.text = `${fator} x ${contador} = ${produto}`
                selecione.appendChild(opcao)
            }
        }
    }
}