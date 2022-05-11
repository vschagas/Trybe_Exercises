//Exercício 1
const sum = (a, b) => {
    if(Number.isNaN(a) || typeof b !== 'number'){
        throw Error ('Digite apenas números')
    }  
    return a + b;
}

// Exercício 2

const myRemove = ([1, 2, 3, 4], 3)



module.exports = { sum };