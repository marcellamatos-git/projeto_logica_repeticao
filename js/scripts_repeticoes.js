//ESTRUTURA DE REPETIÇÕES FOR   
const divFor = document.querySelector('#div-for')

for(i = 0;i < 10; i++ ){
    console.log(i, 'amor')
    divFor.innerHTML += `${i} - Amor <br>`
}
//contador/acumulador

const inputnum = document.querySelector('#num')
const btnnum = document.querySelector('#btn-num')
const divcontacum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnnum.addEventListener('click', (evt)=>{
    //evt.preventDefault()

    let numdigitado = Number(inputnum.value)

    cont++
    acum += numdigitado

     divcontacum.innerHTML = `total de numero digitado é: ${cont} <br>
     a soma dos numeros é: ${acum}`

     inputnum.value = ''
    


})

//Controlador for


const inputfrase = document.querySelector('#frase')
const inputnumrepeticao = document.querySelector('#num-repeticao')
const btnfrase = document.querySelector('#btn-frase')
const divfrase = document.querySelector('#div-frase')

btnfrase.addEventListener('click' , (evt) =>{
    let numrepeti = Number(inputnumrepeticao.value)
    let frase = inputfrase.value
   
    for (i = 0; i < numrepeti; i++){
        divfrase.innerHTML += `${i + 1} - ${frase} <br>`
    }
})

//Coleçao de dados - array
const presentes = ["bicleta", 'celular', 'camisa flamengo']
 
const divArray = document.querySelector('#div-array')
 

for(i = 0;i < 3;i++ ){
    divArray.innerHTML += `${presentes[i]} <br>`
}


//For in
const divForin = document.querySelector('#div-forin')

for(let posicao in presentes){
    divForin.innerHTML += `${presentes[posicao]} <br>`
}

//for of

const divforof = document.querySelector('#div-forof')

for(let elemento of presentes){
    divforof.innerHTML += `${elemento} <br>`
}

//foreach
const divforEach = document.querySelector('#div-foreach')

presentes.forEach((elemento, posicao)=>{
    divforEach.innerHTML += `${posicao + 1} - ${elemento} <br>`
})

//coleçao de objetos literais - array
const pessoas = [
    {nome: 'maria' , idade: 25, renda:8500},
    {nome: 'joerdson', idade: 75, renda:5000},
    {nome: 'taoca', idade: 28, renda:500},
    {nome: 'chico', idade: 36, renda:100},
    {nome: 'joao', idade: 32, renda:80},

]

//manipulando array
//adicionando elementos no array
pessoas.push ({nome:'magnolia', idade:32, renda: 3500})
pessoas.unshift({nome:"joedison", idade: 40, renda: 6000})

//Splice adicionar em uma posicçao sem excluir um elemento
pessoas.splice(3,0, {nome: "extraterrestre", idade:800, renda: 0.50})

//Splice adiciona em uma posição e nesse exemplo exclui mais dois elementos a partiri da posicao(indice) informado
pessoas.splice(3,2,{nome:'extraterrestre', idade:990, renda:0.50})

//splice exclui uma posiçao e nesse exmplo exclui apenas o elemento da posição(indice) informada
pessoas.splice(1,0)

//splice exclui dois elementos a partir da posicao informada
pessoas.splice(2,2)

//excluir o ultimo elemento do array
pessoas.pop()

//exibir a quantidade de elementos em um array
console.log('total de elementos no array pessoas ======>', pessoas.length)

//listando objeto literal pelo forin
const divlistobjfor = document.querySelector('#div-listaobj-for')

for(i = 0; i < pessoas.length;i++){
    divlistobjfor.innerHTML += `${pessoas[i].nome}, ${pessoas[i].idade} R$ ${pessoas[i].renda.toFixed(2).replace('.',',')} <br>`
}

//listando objeto literal for in
const divlistobjforin = document.querySelector('#div-listaobj-forin')

for(let indice in pessoas){
    divlistobjforin.innerHTML +=`${indice} - ${pessoas[indice].nome}, ${pessoas[indice].idade}, R$ ${pessoas[indice].renda.toFixed(2).replace('.',',')} <br>`
}

//lista objeto literal for of
const divlistobjforof = document.querySelector('#div-listaobj-forof')

let contforof = 0

for(let elem of pessoas){
    contforof++

    divlistobjforof.innerHTML += `${contforof} - ${elem.nome}, ${elem.idade}, R$ ${elem.renda.toFixed(2).replace('.',',')}<br>`

}

//lista objeto literal pelo foreach
const divlistobjforeach = document.querySelector('#div-listaobj-foreach')

pessoas.forEach((elem, i)=>{
    divlistobjforeach.innerHTML += `${i + 1} - ${elem.nome}, ${elem.idade} R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
    
})



