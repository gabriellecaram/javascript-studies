const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);

//1 - Crie uma função que receba dois arrays e os concatene em um único array.
console.log("Exercício 1:")
concatenar = function (arr1, arr2){
    const finalArray = arr1.concat(arr2);
    return finalArray;
}
console.log(concatenar(salaJS, salaPython))

function concatenar(arr1, arr2){
    const finalArray = arr1.concat(arr2);
    return finalArray;
}
console.log(concatenar(salaJS, salaPython))

