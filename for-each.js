//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const notas = [7, 8, 9, 10];

let soma = 0;

notas.forEach(function (nota){
    soma += nota;
})
/*
foreach eh um call back
o parametro do for-each chama outra função
no foreach a função eh executada para todos os elementos do array
*/

let media = soma/notas.length;
console.log(`a media das notas é ${media}`); 

//pode fazer a função separadamente
soma = 0;
notas.forEach(somaNotas);
function somaNotas (nota){
    soma += nota;
}
media = soma/notas.length;
console.log(`a media das notas é ${media}`); 
