var nome = prompt('Qual é seu nome?')

function carregar(){
    principal.innerHTML = `Seja bem vindo de volta sr/a ${nome}`
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} `
    if(hora > 0 && hora < 12){
        //bom dia
        img.src="manha.png" 
        document.body.style.background = 'lightyellow'
        res.innerHTML = `Bom dia`
    }else if(hora > 11 && hora < 18){
        //boa tarde
        img.src="tarde.png"
        document.body.style.background = 'rgba(96, 61, 29, 0.8)'
        res.innerHTML = `Boa tarde`
    }else {
        //boa noite
        img.src="noite.png"
        document.body.style.background = '#823954'
        res.innerHTML = `Boa noite`
    }
}