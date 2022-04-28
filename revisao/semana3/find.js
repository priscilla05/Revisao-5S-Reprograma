// find - encontre  uma aluna que tenha nome = "Dani"

const turma = require('./dados')

const alunaEncontrada = turma.find((aluna) => {aluna.nome === 'Dani'})
console.log(alunaEncontrada)

