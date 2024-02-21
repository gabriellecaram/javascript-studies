// == vs ===

const estaAprovado = true
if (estaAprovado === true) {
    console.log('aprovado');
  }
  


// Código omitido. 

if ("0" == 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }
  
//Isso significa que o JavaScript avaliou que uma string 
//contendo o número zero dentro é a mesma coisa que o número zero, 
//logo, avaliou essa comparação como true, ou seja, as duas coisas são iguais.
//Agora, vamos mudar os dois iguais da comparação por três iguais:  

// Código omitido. 

if ("0" === 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }
  
/*O motivo é que o JavaScript está comparando não apenas o valor, mas também o tipo de dado. 
Quando utilizamos dois iguais ==, o JavaScript compara o valor, então, o valor zero em string 
e valor zero em número. Internamente, ele faz alguns tipos de conversão para conseguir fazer essa comparação.
Quando adicionamos três iguais ===, o JavaScript não compara apenas o valor, 
mas compara também o tipo de dado. Apesar de zero ser igual a zero, número e string não são a mesma coisa, 
então, ele avaliará essa comparação como falso e entrará no else.*/  