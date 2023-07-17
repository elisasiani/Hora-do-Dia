function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 5
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.setAttribute('src', 'manhap.png')
        document.body.style.background = '#b77b40'
    } else if (hora >= 12 && hora <= 18) {
        img.setAttribute('src', 'tardep.png')
        document.body.style.background = '#8d5931'
    } else {
        img.setAttribute('src', 'noitep.png')
        document.body.style.background = '#261a17'
    }
}


