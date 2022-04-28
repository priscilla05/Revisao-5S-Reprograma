// ordenar as alunas pela idade crescente

const turma = require('./dados')

const listaOrdenada = turma.sort((itemAtual, itemAnterior) =>{
    return itemAtual.idade - itemAnterior.idade
})

console.log(listaOrdenada)
