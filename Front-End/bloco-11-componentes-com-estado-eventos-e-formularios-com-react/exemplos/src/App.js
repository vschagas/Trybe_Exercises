import React from 'react'
// import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

class App extends React.Component {

  state = {
    fildType: 'password',
  }

  handlePassword = ({target}) => {
    this.setState({
      fildType: this.state.fildType === 'password'? 'text' : 'password'
    })
  }

  render() {
    return (
      <label>
        Password
        <input type={this.state.fildType} placeholder={'Digite sua senha'}></input>
        <button onClick={this.handlePassword.bind()}>
          {/* {this.state.fildType === 'password'? <BsFillEyeFill /> : <BsFillEyeSlashFill />} */}
          {this.state.fildType === 'password'? 'mostrar' : 'Ocultar'}
        </button>
      </label>
    )
  }
}


export default App;
