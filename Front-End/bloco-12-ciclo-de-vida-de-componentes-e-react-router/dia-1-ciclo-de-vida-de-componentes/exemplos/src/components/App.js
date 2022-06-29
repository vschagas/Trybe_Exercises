import React, { Component } from 'react'

export default class Dadjoke extends Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],

    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' }}
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    
    this.setState({
      storedJokes: requestObject
    })
  };

  componentDidMount() {
    this.fetchJoke();

  }

  saveJoke = () => {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  };


  render() {
    const { storedJokes } = this.state;
    // const loadingElement = <span>Loading...</span>
    return (
      console.log(storedJokes)
      // <div>
      //   { storedJokes.map(({ id, joke }) => (<p>{ joke }</p>)) }
      //   <h1>valmir</h1>
      // </div>
    )
  }
}


