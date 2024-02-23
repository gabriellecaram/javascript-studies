const notaP1 = 10;
const notaP2 = 8.5;
const notaP3 = '9';
const media = (notaP1 + notaP2 + Number.parseInt(notaP3))/3; //Number.parseInt(variavel) converte string em int
console.log(media.toFixed(2)); //.toFixed(x) define a qtd de casas decimais a serem exibidas


/*

NaN = NOT A NUMBER
Na maior parte dos casos, NaN é o valor retornado como resultado de uma operação aritmética mal formada, por exemplo:
console.log(5 * 'a'); // NaN


console.log(5 * '5'); ???????
o resultado é 25 e não NaN como esperado, afinal de contas estamos tentando multiplicar números e letras. 
O JavaScript, nestes casos, sempre tenta converter de forma implícita
a string em número antes de tentar efetuar a operação aritmética.


VERIFICAR
const numero = 10;
const nome = 'Ana';

Number.isNaN(numero) // false
Number.isNaN(nome) // false
Number.isNaN(NaN) // true*/
