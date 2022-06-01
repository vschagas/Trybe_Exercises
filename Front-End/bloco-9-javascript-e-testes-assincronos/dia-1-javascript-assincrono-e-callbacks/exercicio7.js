const sum =(number1, number2) => {
  
  setTimeout(() => { 
    
    const result = number1 + number2
    console.log(result);
  }, 2000)
}
console.log(sum(2,2));

module.exports ={setTimeout}