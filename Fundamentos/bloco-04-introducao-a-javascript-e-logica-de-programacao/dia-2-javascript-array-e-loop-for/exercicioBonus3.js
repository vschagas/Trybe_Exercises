let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = [];


for (index = 1; index < numbers.length; index += 1){
    for ( index2 = 0; index2 < index; index2 += 1 ){
    result.push (numbers[index] * numbers[index2]);
    }
} 
/* console.log(numbers); */
console.log(result);

