var arr = [];
arr = [10, "Gabrielle", true, {teste: 1, teste: 2}];

console.log(arr);
console.log(arr[1]);

arr[4] = 100;
console.log(arr);
console.log(typeof arr);
console.log(typeof arr[0]);


const nota1 = 10, nota2 = 6.5, nota3 = 9, nota4 = 7.5;
//const media = (nota1+ nota2 + nota3 + nota4)/4;

const notas = [10, 9.5, 9.8, 10];
let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length; //LENGTH especifica o tamanho do array => qtd de elementos, não de índices ou posições
console.log(media.toFixed(2));


//add nota no array
notas.push(8.8);

media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/ notas.length;
console.log(media.toFixed(2));


const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"


//EXERCÍCIOS

//1- Crie um array esparso e atribua valores a alguns elementos do array 
//(por exemplo, defina valores nos índices 1, 3 e 7). 
//Imprima no console o array e também a informação de comprimento do array.

console.log("Exercício 1:")
const indef = [, 10,,10,,,,10];
console.log(indef);
console.log(indef.length);


//2- Crie um programa em Node.js que inicie com um array cinco elementos e 
//atribua um novo valor para a primeira posição (índice 0) desse array. 
//Em seguida, exiba o array antes e depois da alteração.
console.log("Exercício 2:")
const arr5 = [,,,,,];
console.log(arr5);
arr5[0]=1;
console.log(arr5);

//3- Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha
//utilizando o método push(). Imprima no console os itens presentes no array para 
//verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array 
//(índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
console.log("Exercício 3:")
const meuArray2 = [];

meuArray2.push(1);
meuArray2.push(2);
meuArray2.push(3);
console.log(meuArray2)

meuArray2[0] = meuArray2[0]*2;
console.log(meuArray2)


//4- Desenvolva um programa em Node.js que crie um array vazio e atribua valores 
//a ele utilizando o método push(). Adicione três números inteiros ao array e,
//em seguida, exiba o array resultante.
//console.log("Exercício 4:")

//5- Desenvolva um programa em Node.js que simule uma clínica veterinária. 
//Crie um array vazio chamado clinica que representará a fila de animais na clínica.
//Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de
//animais no console. Após a exibição, remova os animais da lista um por vez e, por fim,
//exiba no console o estado final da lista.

