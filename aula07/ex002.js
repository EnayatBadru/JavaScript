/*
var hora = 23
var minutos = 20
*/

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora sao exatamente ${hora}:${minutos}`)
if(hora > 0 && hora <= 5){
    console.log(`Boa Madrugada!`)
}else if(hora >= 6 && hora < 12){
    console.log(`Bom Dia!`)
}else if(hora >= 12 && hora < 18){
    console.log(`Boa Tarde!`)
}else{
    console.log(`Boa Noite!`)
}
