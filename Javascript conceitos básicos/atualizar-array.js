//SPLICE
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
console.log(listaEstudantes)
listaEstudantes.splice(1, 2, 'Gabrielle') 
// PARAMETRO 1: começa o processo no índice 1, v
// PARAMETRO 2: vai deletar 2 elementos (ana e caio)
// PARAMETRO 3: insere elemento
console.log(listaEstudantes)


console.log("---------------\n")

animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)


//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
//const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
//Utilize o método splice para remover as frutas no índice 2 e 3 e, 
//em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

console.log("exercício 3: ");
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas)
frutas.splice(2,2,'Kiwi', 'Pessego');
console.log(frutas)