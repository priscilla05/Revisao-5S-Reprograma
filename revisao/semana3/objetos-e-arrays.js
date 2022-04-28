/*criar, acessar , incluir e deletar*/

//objeto 
const pessoa = {
    nome: 'Priscilla', 
    apelido: 'Pri', 
    idade: 34

}

// acessar propriedade com método desestruturação dentro do objeto pessoa

const {nome,apelido, idade} = pessoa //estou tirando de dentro de pessoa as propriedades
console.log(pessoa)

pessoa.role = 'adm'
console.log(pessoa)

// criar uma cópia de person e alterar itens (spread operator)

const novaPessoa= {...pessoa, role: 'dev'}
console.log(novaPessoa)



//array

let alunas = ["Gabi", "Erica", "Camila", "Lia", "Bruna"]
alunas.push ("Mary")
console.log(alunas)

alunas = [...alunas, 'Silvia']
console.log(alunas)

alunas.unshift('Ana') // uso o unshift para adicionar na primeira da lista
//console.log(alunas)

//Array de objetos

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
// imprimir no console a última aluna
console.log(turma[turma.length -1])
console.log(turma[0]) // imprime a primeira pessoa da lista