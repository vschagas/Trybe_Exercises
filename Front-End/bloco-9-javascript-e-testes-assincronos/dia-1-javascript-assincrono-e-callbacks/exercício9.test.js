// Verifique se a importação do arquivo correto está sendo feita.
const { exportAllDeclaration } = require("@babel/types");
const { doesNotMatch } = require("assert");
const { getPokemonDetails } = require("./exercício8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
      getPokemonDetails(({ name }) => name === barabam, (err, mess) => { 
        expect(err).toEqual(new Error('Não temos esse pokémon para você :('));
      } )
    
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    getPokemonDetails(({ name }) => name === barabam, (err, mess) => { 
      const message = ' ola'.toEqual(new Error('Não temos esse pokémon para você :('));
      
    } )
  });
});