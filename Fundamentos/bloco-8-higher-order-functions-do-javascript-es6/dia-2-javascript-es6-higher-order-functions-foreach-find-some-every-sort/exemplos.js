// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => numbers.find((index) => index % 3 === 0 && index % 5 === 0 )
 

// console.log(findDivisibleBy3And5())

// ///////////////////////////////////////////////

// const names = ['João', 'valmir', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => names.find((index) => index.length === 5)
  

// console.log(findNameWithFiveLetters());

// /////////////////////////////////////////////////////

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((index) => index.id === id)
//   }
  
//   console.log(findMusic('31031685'))


// ///////////////////////////////////////////////////
//   const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((index) => index === name)
// }

// console.log(hasName(names, 'Valmir'))

// //////////////////////////////////////////////////

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 18 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     /* return arr.every((index) => index.age >= minimumAge); */
//     return Object.values(arr).every((index) => index.age >= minimumAge)
//   }
  
//   console.log(verifyAges(people, 18));

// ////////////////////////////////////
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   people.sort((a,b) => a.age - b.age)
  
//   console.log(people);