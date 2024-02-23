//https://cursos.alura.com.br/extra/alura-mais/destructuring-em-js-c308

const alunos = ['Gabrielle', 'Danielle', 'Isabelle', 'Maria Eduarda'];
const medias = [10, 9.5, 9.4, 10];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno); //retorna a primeira ocorrencia do valor fornecido
        console.log(alunos[indice],medias[indice] )
    }else console.log('aluno nao encontrado.');
}

exibeNomeENota('Gabrielle');
exibeNomeENota('Gustavo');