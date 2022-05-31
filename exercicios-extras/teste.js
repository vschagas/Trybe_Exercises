// const Jonh = {
//   name: 'Jonh',
//   age: 20,
//   addresses: [
//     { addresses: 'av Brasil, 123', city: 'São Paulo'},
//     { addresses: 'r João Da Cunha, 70', city: 'Itaqua' }
//   ]
// };  
// const { name, age } = Jonh

// console.log('age:', age );

/////////////////////////////////////////////////////////////

// const getFullName = ({ user }) => 
//    `${user.firstName} ${user.lastName}`;

// const state = {
//     user: {
//         firstName: 'Mahmoud',
//         lastName: 'Elmahdi'   
//     }
// };

// console.log(getFullName(state)); 

///////////////////////////////////////////////////////////////////
// function sumTwoSmallestNumbers(numbers) {  
//   // const number = numbers.sort((a, b) => a -b);
//   // return number[0] + number[1];

//     const [number1, number2] = numbers.sort((a,b) => a - b);
//     return number1 + number2;
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));


/////////////////////////////////////////////////////////////
// function doubleChar(str) {
//   return [...str]. map((element) => element + element).join('')
// }
// console.log(doubleChar('valmir'));

//////////////////////////////////////////////////////////////////

const getUser = () => ({
  id: 156,
  isAdmin: true,
  fullName: 'Mahmoud Elmahdi',
  email: 'abracadabra@email.com',
  languages: ['Arabic', 'English', 'Russian']
});

const { languages } = getUser();
console.log( 'valmir', ...languages,  );
