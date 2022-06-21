// import Greetting from "./Greeting";
import Image from "./image";

// function App() {
//   return (
//     <main>
//       <Greetting name='Valmir' lastName='Chagas' />
//     </main>
//   )
// }


function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </main>
  )
}

export default App;