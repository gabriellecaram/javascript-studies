const nome1 = 'Gabrielle';
const nome2 = 'Maria Eduarda';

function exibeEstudante(nome){
    console.log(nome);
}

exibeEstudante(nome1);
exibeEstudante(nome2);
exibeEstudante('Ana Laura');

// parâmetros/argumentos
// retorno

function exibeInfosEstudante(nome, nota) {
    console.log(`o nome é ${nome} e a nota é ${nota}`);
}

exibeInfosEstudante('Caroline',10);
exibeInfosEstudante('Ana',7);


// parâmetros/argumentos
// retorno

function exibeInfosEstudante(nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`;
  }
  
  console.log(exibeInfosEstudante('Caroline', 10));
  console.log(exibeInfosEstudante('Ana', 7));
  
