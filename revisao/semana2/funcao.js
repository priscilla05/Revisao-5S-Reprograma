/*Retornar a multiplicação de 2 números , declaração com a palavra reservada function*/

function myFunction (num1 , num2){
    return num1 * num2
}

const result = myFunction ( 4, 5) // 20
console.log(result)


// função anônima
const multiplica = function (num1 , num2){
    return num1 * num2
}
console.log(multiplica(4 , 5)) // 20

//Arrow Function

const multiplicaDoisInteiros = (num1 , num2) => {
    return num1 * num2
}
console.log(multiplicaDoisInteiros(4, 5)) // 20