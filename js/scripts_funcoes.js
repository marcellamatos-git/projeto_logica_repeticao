function mensagem(){
    console.log('uma mensagem')
}
mensagem()

function mensagemlinda(txt){
    console.log(txt)
}

mensagemlinda('Brasil vai dar um pau no brasil')

function somanumeros(num1, num2){
    reposta = num1 + num2
} 

console.log('As somas dos numeros', somanumeros(10,58))

const multiplicacao = function(num1, num2){
    reposta = num1 * num2
}

console.log(multiplicacao(64, 5))

console.log('-------> Arrow function <---------')

const msgarrow = () => {
    console.log('outra mensagem na arrow function')
}

msgarrow()

const divisaonum = (valor1, valor2) =>{
    
    if ((valor1 > 0) && (valor2 > 0)){
        reposta  = valor1 / valor2
        }else{
            reposta = 'nao é possivel diviao por 0'
        }

        return reposta
    }

    console.log(divisaonum(10,8000))

    console.log(Math.random())

    console.log('o numero sorteado =====>',parseInt(Math.random() * 100))

setTimeout(()=>{
    console.log('execetuou deppooiis de 5 s')
    msgarrow()
}, 5000)

//let cont = 0 
//setInterval(()=>{
   // cont++
    //console.log(cont, "repetiçao da setInterval")

    //if(cont == 5){
       // clearInterval(intervalo)
   // }
//},// 3000)

const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolta = 0, numSorteado = 0, contPar = 0, contImpar = 0

const sorteio = setInterval(() => {
    contVolta++

    numSorteado = parseInt(Math.random() * 60)

    console.log(`${contVolta}ª número sorteado ${numSorteado}`)

    if (numSorteado % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }

    divNumSorteio.innerHTML += `${contVolta} número gerado ${numSorteado} - ${numSorteado % 2 == 0 ? 'PAR' : 'ÍMPAR'} <br>`
    

    if (numSorteado == 6) {
        console.log('-------> SORTEIO ENCERRADO <-------')

        divNumSorteio.innerHTML += `
            -------> SORTEIO ENCERRADO <------- <br>
            TOTAL DE NÚMEROS GERADOS: ${contVolta} <br>
            TOTAL DE NÚMEROS PAR: ${contPar} <br>
            TOTAL DE NÚMEROS ÍMPAR: ${contImpar}
        `

        clearInterval(sorteio)

        contVolta = 0
        numSorteado = 0
    }
}, 2000)