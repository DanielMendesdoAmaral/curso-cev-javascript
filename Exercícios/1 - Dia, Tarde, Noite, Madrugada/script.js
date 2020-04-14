function atualizar() {
    var corpo = window.document.getElementsByTagName("body")[0]
    var hora = new Date()
    var hora = hora.getHours()
    var paragrafo = window.document.getElementsByTagName("p")[0]
    var circulo = window.document.getElementById("circle")

    if ((hora>=0) && (hora<6)) {
        corpo.style.background = "linear-gradient(90deg, rgba(54,0,75,1) 0%, rgba(234,152,128,1) 100%)"
        circulo.style.backgroundImage = "url(images/madrugada.jpg)"
        circulo.style.backgroundSize = "cover"
        paragrafo.innerHTML = `Agora são ${hora} horas da madrugada`
    }
    else if ((hora>=6) && (hora <12)) {
        corpo.style.background = "linear-gradient(90deg, rgba(5,169,200,1) 0%, rgba(223,196,93,1) 100%)"
        circulo.style.backgroundImage = "url(images/dia.jpg)"
        circulo.style.backgroundSize = "cover"
        paragrafo.innerHTML = `Agora são ${hora} horas do dia`
    }
    else if ((hora>=12) && (hora<18)) {
        corpo.style.background = "linear-gradient(90deg, rgba(255,76,0,1) 0%, rgba(115,86,0,1) 100%)"
        circulo.style.backgroundImage = "url(images/tarde.webp)"
        circulo.style.backgroundSize = "cover"
        paragrafo.innerHTML = `Agora são ${hora} horas da tarde`
    }
    else {
        corpo.style.background = "#101010"
        circulo.style.backgroundImage = "url(images/noite.jpg)"
        circulo.style.backgroundSize = "cover"
        paragrafo.innerHTML = `Agora são ${hora} horas da noite`
    }
}
