/*Capturar a data e o horário atual, vou atribuir a uma variável 
imprimir no console num formato pt-BR e também verificar o tipo*/

const hoje = new Date().toLocaleDateString('pt-BR')
console.log(hoje) // 27.04.2022
console.log (typeof hoje) // string