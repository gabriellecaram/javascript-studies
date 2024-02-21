/*let estudante;

if (1>0){
    estudante = 'Gabrielle';
    console.log(estudante);
}

//estudante = 'Ana';
console.log(estudante);
const nome = 'Gabrielle';
console.log(`Nome do aluno: ${nome}.`);*/

//var tem escopo de função ou global. não existe apenas dentro de um bloco. 


const nome = 'Camila'; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”

if (1 > 0) {
    let name = 'Ana';
    console.log(name); // ‘Ana’
  }
  
  // variável `name` não está acessível
  //console.log(name); // Error: name is not defined
  

  function cumprimentar() {
    const nome = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
  }
  
  // as variáveis não podem ser acessada de fora da função
  console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console
  