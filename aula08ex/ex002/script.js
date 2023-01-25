function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex [0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //Crianca
                
            }else if(idade < 21){
                //Jovem
            }
            else if(idade < 50){
                //Adulto
            }else{
                //Idoso
            }
        }else if(fsex[1].checked){
            genero = 'Feminio'
            if(idade >= 0 && idade < 10){
                //Crianca
            }else if(idade < 21){
                //Jovem
            }
            else if(idade < 50){
                //Adulto
            }else{
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Idade calculada: ${idade} anos  do sexo ${genero}` 
    }
}