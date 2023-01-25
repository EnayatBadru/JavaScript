var hoje = new Date()
var dia = hoje.getDay()

/*
                 Dias da Semana com base na maquina
organizacao numerica                       Como o Computador representa os Dias da Semana
          [1]         -   Domingo     =                      [0]
          [2]         -   Segunda     =                      [1]
          [3]         -   Terca       =                      [2]
          [4]         -   Quarta      =                      [3]
          [5]         -   Quinta      =                      [4]
          [6]         -   Sexta       =                      [5]
          [7]         -   Sabado      =                      [6]
*/

//console.log(`Hoje é ${dia}`)

switch(dia){
    case 0:
        console.log('Hoje é Domingo')
    break
    case 1:
        console.log('Hoje é Segunda')
    break
    case 2:
        console.log('Hoje é Terca')
    break
    case 3:
        console.log('Hoje é Quarta')
    break
    case 4:
        console.log('Hoje é Quinta')
    break
    case 5:
        console.log('Hoje é Sexta')
    break
    case 6:
        console.log('Hoje é Sabado')
    break
    default:
        console.log('[ERROR] DIA INVALIDO!')
    break
}
