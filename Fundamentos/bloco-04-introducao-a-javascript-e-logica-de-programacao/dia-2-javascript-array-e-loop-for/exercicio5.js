let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* console.table(numbers) */
let maior = numbers[0]

for (let index = 1; index < numbers.length; index++) {
    
   if (maior < numbers[index]) {
    console.log(numbers[index]);
       maior = numbers[index]
   }
    
}
console.log(maior);