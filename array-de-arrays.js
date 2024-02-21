const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(lista, "\n");
console.log(`a aluna da posição 1 da lista é: ${lista[0][1]}`);
console.log(`a aluna da posição 1 da lista é: ${lista[0][1]}. a nota dessa aluna é ${lista[1][1]}\n`);

console.log(lista[0]); //[ 'João', 'Juliana', 'Caio', 'Ana' ] -> tem um array inteiro no índice 0


////////////////////////
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];

/*O array funcionarios é um array de duas dimensões. 
Há 3 arrays dentro dele, e para acessar os valores em funcionarios 
precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado 
para escolher qual dos 3 arrays dentro de funcionarios será acessado, podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido.*/


//5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, 
//onde cada elemento seja uma matriz 3x3 com valores iniciando 
//em 1 e aumentando em 1 a cada elemento.

// Função para criar uma matriz 3x3 com valores iniciando em "startValue" e aumentando em 1 a cada elemento
function createSubMatrix(startValue) {
    let subMatrix = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(startValue++);
        }
        subMatrix.push(row);
    }
    return subMatrix;
}

// Função para criar uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento
function createMatrix() {
    let matrix = [];
    let startValue = 1;
    for (let i = 0; i < 3; i++) {
        matrix.push(createSubMatrix(startValue));
        startValue += 9; // Avança para o próximo bloco de 9 números
    }
    return matrix;
}

// Cria a matriz bidimensional
let twoDimensionalArray = createMatrix();

// Exibe a matriz bidimensional no console
console.log(twoDimensionalArray);




///////////////OU/////////////////////
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
