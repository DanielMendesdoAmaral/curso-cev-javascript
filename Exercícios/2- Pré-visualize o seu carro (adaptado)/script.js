function visualizar() {
    var carro = window.document.getElementById("selecione1").value
    var cor = window.document.getElementById("selecione2").value
    var visualize = window.document.getElementById("visualizacao")
    var titulo = window.document.getElementsByTagName("h1")[1]
    
    if ((carro=="BMW 2020") && (cor=="PRETO")){
        titulo.innerHTML = "AQUI ESTÁ O SEU CARRO:"
        visualize.style.background = "url(images/2020p.jpg)"
        visualize.style.backgroundSize = "cover"
        visualize.style.backgroundPosition = "50%"
    }
    else if ((carro=="BMW 2020") && (cor=="VERMELHO")){
        titulo.innerHTML = "AQUI ESTÁ O SEU CARRO:"
        visualize.style.background = "url(images/2020v.jpg)"
        visualize.style.backgroundSize = "cover"
        visualize.style.backgroundPosition = "50%"
    }
    else if ((carro=="BMW 2020") && (cor=="AZUL")){
        titulo.innerHTML = "AQUI ESTÁ O SEU CARRO:"
        visualize.style.background = "url(images/2020a.jpg)"
        visualize.style.backgroundSize = "cover"
        visualize.style.backgroundPosition = "50%"
    }
    else if ((carro=="BMW 2003") && (cor=="PRETO")){
        titulo.innerHTML = "AQUI ESTÁ O SEU CARRO:"
        visualize.style.background = "url(images/2003p.jpg)"
        visualize.style.backgroundSize = "cover"
        visualize.style.backgroundPosition = "50%"
    }
    else if ((carro=="BMW 2003") && (cor=="VERMELHO")){
        titulo.innerHTML = "AQUI ESTÁ O SEU CARRO:"
        visualize.style.background = "url(images/2003v.jpg)"
        visualize.style.backgroundSize = "cover"
        visualize.style.backgroundPosition = "50%"
    }
    else if ((carro=="BMW 2003") && (cor=="AZUL")){
        titulo.innerHTML = "AQUI ESTÁ O SEU CARRO:"
        visualize.style.background = "url(images/2003a.jpg)"
        visualize.style.backgroundSize = "cover"
        visualize.style.backgroundPosition = "50%"
    }
}