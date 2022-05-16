//Exercício 1

const newEmployees = () => {
  const employees = {
      id1: criaEmail('pedro Guerra'),
      id2: criaEmail('Luiza Drumond'),
      id3: criaEmail('Carla Paiva'),
  }
  return employees
  };

  const criaEmail = (nome) => {
      const email = `${nome.toLowerCase().replace(' ', '_')}@ trybe.com`;
      return {nome, email}
  }
  

  console.log(newEmployees(criaEmail));

  /* const listaDeNomes = [
    'Valmir Chagas',
    'Sheila Barros',
    'Miguel Santos',
    'Manuela Santos',
    'Beatriz Santos'
]

const geraEmailComPonto = (nome) => {
  const teste = `${nome.toLowerCase().replace(' ', '.')}@trybe.com`;
  return { teste}
}
const geraEmailComUndeline = (nome) => `${nome.toLowerCase().replace(' ', '_')}@trybe.com`;

const geraListadeEmail = (listaDeNomes, callback) => {
    const resultado = [];
    for( index of listaDeNomes ){
        const email = callback(index)
        resultado.push(email)
    }
    return resultado
}

console.log(geraListadeEmail(listaDeNomes, geraEmailComPonto)); */


/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 2


const numeroSorteado = (number) => {

    const numero = Math.floor(Math.random() *5)+1;
    const sorteio = (number === numero ? 'Parabéns você ganhou :)' : 'Tente novamente!');
    const resultado = `Você apostou ${number} e o resultado foi ${numero} ${sorteio}`
   
    return resultado
}

console.log(numeroSorteado(2));

///////////////////////////////////////////////////////////////////////////////////////////

//Exercício 3 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuacao = (gabarito, estudante) => {
    if(gabarito === estudante){ return 1 }
    if(estudante === 'N.A'){ return 0 }
    return -0.5;
}

const geraResultado = (param1, param2, callback) => {
    let nota = 0;
    for( let index = 0; index < param1.length; index += 1){
        const retorno = callback(param1[index], param2[index])
        nota += retorno
        console.log(retorno);
        
    }return nota;
};

console.log(geraResultado(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuacao));