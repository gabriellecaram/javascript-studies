// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// filter só retorna verdadeiro ou falso

const alunos = ['Ana', 'Bia', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5, 10];


// const tamanhoNome = alunos.filter(
//     (aluno) => {
//         return aluno.length <4;
//     }
// );
// console.log(tamanhoNome);

//vai retornar um array com os valores que
//passaram como TRUE no filter
//ou array vazio se todos forem FALSE

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] <6;
})

const aprovados = alunos.filter((aluno, i) => {
    return medias[i] >=6;
})


console.log('Aprovados: ', aprovados, '\nReprovados: ',reprovados)