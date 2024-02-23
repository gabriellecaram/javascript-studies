const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) { //parametros sao 1- variavel q recebe o elemento do array 2-o array q sera percorrido do inicio ao fim
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log('a média das notas é ${media}');
