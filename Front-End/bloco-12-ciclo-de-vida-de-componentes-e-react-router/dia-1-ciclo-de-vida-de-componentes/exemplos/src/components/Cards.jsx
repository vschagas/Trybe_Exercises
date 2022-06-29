import React, { Component } from 'react'
import '../componentCss/index.css'


export default class Cards extends Component {

  state = {
    characters: [],

  }

   handleGetApi = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then( response => response.json())
      .then( data => {
        this.setState({ characters: data.results})
      })
  };

  componentDidMount() {
    this.handleGetApi()
  };
  
  //  const handleGetApi = async () => {
  //   const response = await fetch('https://rickandmortyapi.com/api/character')
  //   console.log(response);
  // }

  render() {
    const { characters } = this.state
    return (
      <div className='App'>
        <h1>Ricky and Morty Characters:</h1>
        <div className='body'>
          { characters.map(({ id, name, image}) => {
            return (
              <div key={id} className='container'>
                <h4>{ name}</h4>
                <img src={image} alt={ name }/>

              </div>
            )
          })}
      
        </div>
        {/* <button onClick={ this.handleGetApi}>Atualiza</button> */}
      </div>
    )
  }
}




