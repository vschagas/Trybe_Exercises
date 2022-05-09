// Exercício 1

/* const scope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
   
}

scope(false)  */
  
  // Exercício 2

/* 
  const oddsAndEvens = [2,5,3,15,27,19];
    const number = oddsAndEvens.sort((a,b) => b - a)
        
    

  console.log(number); // será necessário alterar essa linha 😉
 */
  

  const sum = (value1, value2) => {
      if (typeof value1 !== 'number' || typeof value2 !== 'number') {
          throw new Error ('os valores devem ser numéricos')
      }
      return value1 + value2;
  }

  console.log(sum(2, '3'))
