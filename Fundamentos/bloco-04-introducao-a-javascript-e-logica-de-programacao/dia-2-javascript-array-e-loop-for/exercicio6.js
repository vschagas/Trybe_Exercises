let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* console.table (numbers); */

let numerosImpar = [];
let qntImpar = 0;


for ( let index = 0; index < numbers.length; index ++){
    if (numbers[index] % 2 != 0 ) {
        qntImpar += 1
        numerosImpar.push (numbers[index])

    }
}
console.log('A tabela contem', qntImpar, 'números ímpares');
console.log(numerosImpar);


