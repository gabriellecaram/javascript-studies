const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(estudanteReprovou(6, 5));
  console.log(estudanteReprovou(10, 2));

  /*Com base nisso, poderemos empregar essa informação em outras partes do código, 
  a fim de criar uma função que, por exemplo, apresente um texto.*/