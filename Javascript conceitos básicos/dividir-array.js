//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 

//SLICE

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 
'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 =   listaEstudantes.slice(0, listaEstudantes.length/2);
console.log(listaEstudantes);
console.log("sala 1: ", sala1)
//console.log(sala1)

const sala2 = listaEstudantes.slice(listaEstudantes.length/2);
console.log("sala 2: ", sala2)


//OBS::::::::::::::::::::::::::::
//quando se passa o parametro de início e fim, o último elemento não é incluído
//quando se passa só o parâmentro de início, pega até o último


//2 - Crie um array chamado numeros contendo números de 1 a 10.
//Utilize o método slice para criar um novo array chamado parteNumeros que
//contenha apenas os números de índice 3 a 7 de numeros.
console.log("Exercício 2:")
const numeros = [1,2,3,4,5,6,7,8,9,10];
const parteNumeros = numeros.slice(2,7);
console.log(parteNumeros)