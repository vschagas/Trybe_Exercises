const { 
    listaDeNomes,
    geraListadeEmail,
    geraEmailComPonto,
    geraEmailComUnderline
} = require('./script');

const emailsComPonto = [

    'valmir.chagas@betrybe.com',
    'sheila.barros@betrybe.com',
    'miguel.santos@betrybe.com',
    'manuela.santos@betrybe.com',
    'beatriz.santos@betrybe.com'   
]

describe ('testa se recebeu email com ponto', () => {
    it ('email com ponto', () => {
        expect(geraEmailComPonto('Valmir Chagas')).toEqual('valmir.chagas@betrybe.com')
    })
    
})


const listaDeNomes = [
    'Valmir Chagas',
    'Sheila Barros',
    'Miguel Santos',
    'Manuela Santos',
    'Beatriz Santos'
]

const geraEmailComUnderline = (nome) => {
    const email = `${nome.toLowerCase().replace(' ', '_')}@betrybe.com`
    return {nome, email}
}

const geraEmailComPonto = (nome) => {
    const email = `${nome.toLowerCase().replace(' ', '.')}@betrybe.com`
    return {nome, email}
}

const geraListadeEmail = (listaDeNomes, callback) => {
    let lista = [];

    for(let index of listaDeNomes){
       const resultado = callback(index)
        lista.push(resultado);
    }
    return lista;
}

const emailComPonto = geraListadeEmail(listaDeNomes, geraEmailComPonto);
const emailComUnderline = geraListadeEmail(listaDeNomes, geraEmailComUnderline);

console.log(emailComUnderline);
console.log(emailComPonto);

module.exports = { 
    listaDeNomes,
    geraListadeEmail,
    geraEmailComPonto,
    geraEmailComUnderline
  }