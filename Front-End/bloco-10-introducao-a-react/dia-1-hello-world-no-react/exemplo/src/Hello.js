import React from "react";
class Hello extends React.Component {
  render() {
    const name = ['valmir', 'Miguel', 'Manuela', 'Sheila', 'Beatriz']
    return (
      <div >
       {
         name.map((pessoa) => <h1 key={pessoa}>ola {pessoa}</h1>)
       }
      </div>
    )
  }
}

export default Hello;