import React, { Component } from "react";



// class Content extends Component {
//   render () {
//     return (
//       <div>
//       {conteudos.map(({conteudo, bloco, status}) => {
//         return  <div>
//                   <h4>{`O conteúdo é: ${conteudo}`}</h4>
//                   <p>{`Status: ${status}`}</p>
//                   <p>{`Bloco: ${bloco}`}</p>
//                 </div>
//       })}
//       </div>
//     );
//   };
// };


// const Content = () => {
//   return  <div>
//             {conteudos.map(({ conteudo, bloco, status}) => {
//               return <div>
//                         <h4>{`O conteúdo é: ${conteudo}`}</h4>
//                         <p>{`Status: ${status}`}</p>
//                         <p>{`Bloco: ${bloco}`}</p>
//                      </div>
//             })}
//           </div>
// };

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];


function Content () {
  return(
   <div className="content">
      {conteudos.map(({conteudo, bloco, status}) => {
        return(
        <div key={conteudo} className= 'card'>
          <h4>{`Oconteúdo é: ${conteudo}`}</h4>
          <p>{`Status: ${status}`}</p>
          <p>{`Bloco: ${bloco}`}</p>
        </div>
        )
      })}
    </div>
  )
};

// class Content extends React.Component {
//   render () {
//     return (
//       conteudos.map(({ conteudo, bloco, status}) => {
//         return (
//           <div key={conteudo} className= 'card'>
//             <h4>{`O conteúdo é ${conteudo}`}</h4>
//             <p>{`Status ${status}`}</p>
//             <p>{`Bloco ${bloco}`}</p>
//           </div>

//         )
//       })
//     )
//   }
// }


export default Content;