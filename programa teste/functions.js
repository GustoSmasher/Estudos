let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')

const sum = Number(numberOne) + Number(numberTwo)
const sub = Number(numberOne) - Number(numberTwo)
const multi = Number(numberOne) * Number(numberTwo)
const div = Number(numberOne) / Number(numberTwo)
const divRest = Number(numberOne) % Number(numberTwo)
let result = (Number(numberOne) + Number(numberTwo)) % 2

alert("A soma dos números escolhidos é: " + sum)
alert("A subtração dos números escolhidos é: " + sub)
alert("A multiplicação dos números escolhidos é: " + multi)
alert("A divisão dos números escolhidos é: " + div)
alert("A sobra da divisão dos números escolhidos é: " + divRest)


if (result !=0){
alert(`A soma dos números escolhidos ${sum} é impar`)

}
else
alert(`A soma dos números escolhidos ${sum} é par`)

if (numberOne == numberTwo) {
    alert('Os números escolhidos são iguais')

}
else
alert('Os números escolhidos são diferentes')



