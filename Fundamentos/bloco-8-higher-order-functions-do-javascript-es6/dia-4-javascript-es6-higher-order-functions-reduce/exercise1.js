        // 🚀  1 - Dada uma matriz, transforme em um array.



const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  

//   const flatten = () => {
//      return arrays.reduce((acc, crr) => {
//           return [acc = `${acc} ${crr}`]
//       });
//   };

// const flatten = () => arrays.reduce((acc, arr) => [`${acc} ${arr}`])

const flatten = () => arrays.reduce((acc, curr) => acc.concat(curr), []);

  console.log(flatten());