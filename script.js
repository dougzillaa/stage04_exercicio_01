//declaração de variaveis
const numberOne = Number(prompt('Digite o primeiro numero: ')) 
const numberTwo = Number(prompt('Digite o segundo numero: '))
const imparPar = (numberOne + numberTwo) % 2
let verImparPar = ''
let equals = ''

//calculando os numeros
const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

//verificando se a soma dos numeros sao impares ou pares
if (imparPar == 1) {
    verImparPar = 'impar'
}else {
    verImparPar = 'par'
}

//verificando se os numeros sao iguais
if (numberOne == numberTwo) {
    equals = 'iguais'
} else {
    equals = 'diferentes'
}

//mostrando na tela pro usuario
alert(`a soma dos numeros ${numberOne} + ${numberTwo} = ${sum} retornando um numero ${verImparPar}.`)
alert(`a subtração dos numeros ${numberOne} - ${numberTwo} = ${sub}`)
alert(`a multiplicação dos numeros ${numberOne} * ${numberTwo} = ${mult}`)
alert(`a divisão dos numeros ${numberOne} / ${numberTwo} = ${div}`)
alert(`o resto da divisão entre ${numberOne} % ${numberTwo} = ${restDiv}`)
alert(`os numeros ${numberOne} e ${numberTwo} são ${equals}`)