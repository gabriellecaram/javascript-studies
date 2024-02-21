//Documentação do MDN: Lista de métodos de string;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#methods
const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log(`a estudante chama ${estudante}`);


const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);

if('estudando JavaScript'.includes('Java')){
    console.log('true');
}; // retorna true

console.log('POR FAVOR, NÃO GRITE'.toLowerCase()); // retorna 'por favor, não grite'
const texto = 'POR FAVOR, NÃO GRITE';
texto.toLowerCase(); // retorna 'por favor, não grite'
console.log(texto);