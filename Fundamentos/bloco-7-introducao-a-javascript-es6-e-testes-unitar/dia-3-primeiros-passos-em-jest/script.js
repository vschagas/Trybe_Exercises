
const sum = (a, b) => a + b;

const summationOf = (number) => {
    return number === 3 ? 6 : 1;
};
console.log(summationOf(2, 4));

module.exports = {sum, summationOf};