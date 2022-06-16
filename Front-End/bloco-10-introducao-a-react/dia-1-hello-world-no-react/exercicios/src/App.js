import React from "react";
// import { Component } from "react";

// class Task extends Component {
//   render () {
//     return (
//       <h1>valmir</h1>
//     )
//   }
// }


// function Task () {
//   return (
//     <h1>valmir</h1>
//   )
// }

// const Task = () => (<h1>valmir</h1>);


const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
const task = (value) => (<li>{value}</li>)

// function App () {
//   return (
//     <ul>{ tarefas.map((tarefa) => task(tarefa)) }</ul>
//   );
// };
 
// const App = () => (<ul>{ tarefas.map(tarefa => task(tarefa)) }</ul>);

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => task(tarefa))}</ul>
    );
  }
}

export default App