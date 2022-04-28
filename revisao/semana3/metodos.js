// Filter: Filtra todas as alunas que tem 32 anos

const turma =[
    {
        nome: 'Bia',
        idade: 25
       
    },
    {
        nome: 'Carla',
        idade: 32
        
    },
    {
        nome: 'Dani',
        idade: 29
       
    },
    {
        nome: 'Joana',
        idade: 45
        
    },
    {
        nome: 'Fernanda',
        idade: 32
        
    }
]

const turmaFiltrada = turma.filter(item=> item.idade === 32) // p cada item do meu array verificar idade e ver se é 32
console.table(turmaFiltrada)


// Reduce : Realizar operações matemáticas
// qual a média simples da lista turma?

const somaIdades = turma.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual.idade
}, 0)

const media = (somaIdades/ turma.length).toFixed(0)
console.log(media)




