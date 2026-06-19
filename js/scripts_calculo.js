/**
 * valor for ate 100 calculo sera 10%
 * valor for de 101 ate 1000 o calculo seja 15%
 * acima de 1000 seja de o calculo seja 20%
 */
 const calculopercentual = (valor) => {
    let valorcalculo = 0.0

    if(valor <= 100){
        valorcalculo = valor * 0.10
    }else if(valor <= 1000){
        valorcalculo = valor * 0.15
    }else{
        valorcalculo = valor * 0.20
    }
        
    return valorcalculo

 }

 export{calculopercentual}