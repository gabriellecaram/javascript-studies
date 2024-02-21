//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// MAP sempre vai retornar um array com todos os retornos da função
// add um ponto extra em todas as notas

const notas = [7, 8, 9, 10];

const notasAtt = notas.map(function(nota){
    if(nota<10)return nota +1;
    else return nota;
})
console.log('notas:', notas, '\nnotas att:', notasAtt );

//ARROW FUNCTION:
const notasAttArrowFunc = notas.map((nota) => nota+1 >= 10 ? 10 : nota+1)
console.log('arrow:', notasAttArrowFunc)


// notas.forEach(function(nota){
//     if(nota<10){
//         ++nota;
//     }
// }) NAO DA PRA USAR FOREACH 
//    PQ FOREACH N RETORNA NADA

