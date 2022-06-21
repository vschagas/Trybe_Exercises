import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    // const { name } = this.props
    return (
      <div className="pokedex">
        {/* <h1>{ name }</h1> */}
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}
export default Pokedex