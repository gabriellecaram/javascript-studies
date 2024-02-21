const alunos = ['Gabrielle', 'Danielle', 'Isabelle', 'Maria Eduarda'];
const medias = [10, 9.5, 9.4, 10];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno); //retorna a primeira ocorrencia do valor fornecido
        console.log(lista[0][indice],lista[1][indice] )
    }else console.log('aluno nao encontrado.');
}

exibeNomeENota('Gabrielle');
exibeNomeENota('Gustavo');