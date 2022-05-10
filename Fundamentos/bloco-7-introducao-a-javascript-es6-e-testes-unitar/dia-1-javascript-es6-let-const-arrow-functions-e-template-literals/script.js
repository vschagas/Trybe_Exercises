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


  const oddsAndEvens = [2,5,3,15,27,19,10];
    const number = oddsAndEvens.sort((a,b) =>  b - a)
        
    

  console.log(number); // será necessário alterar essa linha 😉

  const teste = (array) =>{
    const ordenados = [];
    for(let i of array) {
      if (typeof i === 'string'){
        throw new Error('Apenas números')
      }
       ordenados.push(i)
    }
    console.log(ordenados);
  } 
  teste(oddsAndEvens);

