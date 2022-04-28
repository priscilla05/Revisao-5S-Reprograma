//Calcule a média das idades das alunas(envolve operação matemática: uso reduce)

const turma = require('./dados')

const somaIdades = turma.reduce ((acumulador, alunaAtual) =>{
    return acumulador + alunaAtual.idade
},0)

const media = (somaIdades / turma.length).toFixed(2)
console.log(media) //32.60
