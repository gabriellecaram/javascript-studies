// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// reduce() para “reduzir” uma lista de números para um único valor. 
// Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso.

// const numeros = [43, 50, 65, 12]
// const soma = numeros.reduce((acum, atual) => atual + acum, 0) 
// console.log(soma) //170

// O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

// O método reduce() está trabalhando com dois parâmetros. 
// O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro
// é um número que representa o valor inicial do acumulador – no caso, 0.
// A função callback foi escrita diretamente dentro do reduce(), 
// e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado (acum) e o valor atual.
// A função callback foi escrita na forma de arrow function; nesse caso,
// quando só temos uma linha de instrução dentro da função (atual + acc)
// não precisamos usar chaves e nem da palavra-chave return.
// Caso você tenha mais de uma linha de instrução dentro de uma arrow function, 
// as chaves {} e a palavra-chave return voltam a ser necessários.


const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function media(listadenotas){
    // const somadasnotas = listadenotas.reduce((acumulador, nota) => {
    //     return acumulador + nota;
    // }, 0);

    const somadasnotas = listadenotas.reduce((acumulador, nota) => acumulador+nota,0);
    //0 eh o valor inicial da soma
    const media = somadasnotas/listadenotas.length;
    return media;
}

console.log(media(salaJS))
console.log(media(salaJava))
console.log(media(salaPython))