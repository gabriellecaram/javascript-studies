const notas = [10, 9, 8, 9];
const novaListaNotas = notas;
// let nota = 9.75;
// let novaNota = nota;


console.log(notas) //[ 10, 9, 8, 9 ]
console.log(novaListaNotas) //[ 10, 9, 8, 9 ]

novaListaNotas.push(11);

console.log(notas) //[ 10, 9, 8, 9, 11 ]
console.log(novaListaNotas) //[ 10, 9, 8, 9, 11 ]

//arrays nao se comportam como dados primitivos.
//const novaListaNotas = notas; nao é uma cópia, é uma referencia

const notasClone = [...notas,10]; // o ,10 é pra ja add um novo valor no array.
console.log(notas)
console.log(notasClone) 