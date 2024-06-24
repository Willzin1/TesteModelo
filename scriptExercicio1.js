function carregar() {
    var primDiv = document.getElementById('div1')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    primDiv.innerHTML = `Agora são ${hora} horas`
    

    if (hora >= 0 && hora < 7) {
        // Boa madrugada!
        img.src = 'madrugada.jpg'
        document.body.style.background = '#010f3c'
        primDiv.innerHTML += ', Boa madrugada!'
        
    } else if (hora >= 7 && hora <= 12) {
        // Bom dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#e6bd61'
        primDiv.innerHTML += ', Bom dia!'

    } else if (hora > 12 && hora < 18) {
        // Boa tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#ab3301'
        primDiv.innerHTML += ', Boa tarde!'

    } else {
        // Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#443458'
        primDiv.innerHTML += ', Boa noite!'
    }

}

