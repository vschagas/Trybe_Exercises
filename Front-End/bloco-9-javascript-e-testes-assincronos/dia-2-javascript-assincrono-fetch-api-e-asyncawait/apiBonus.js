
const trataDados = (data) => {
  const filtred = data.filter(({ rank }) => rank <= 10)
  const treatedValues = filtred.map(({ name, priceUsd, symbol}) => ({name,priceUsd, symbol}))
  return console.log(treatedValues);
}

const body = document.querySelector('body')

treatedValues.forEach(({ name, priceUsd, symbol}) => {
  const div = document.createElement('div')
  div.innerHTML = `A moeda ${name} que tem o preço em dolar ${priceUsd} e que tem o símbolo ${symbol}`
  body.appendChild(div)
});

const getApi = async() => {
  try {
const response = await fetch(`https://api.coincap.io/v2/assets`) 
const dados = await response.json()
trataDados(dados.data);
  } catch (error) {
    console.error(error)
  }
};
getApi()




// const extractFiles = (dados) => {
//   const filtred = dados.filter(({ rank }) => rank <=10)
//   // const filtred = dados.filter((element, index) => index <=9)
//   const filtredToId = filtred.map(({ name, priceUsd }) => ({ name, priceUsd}))
  
//   filtredToId.forEach(({ name, priceUsd }) => {
//     // console.log(element);
//     div = document.createElement('div')
//     div.innerHTML = ` ${name}: ${priceUsd}.`
//     body.appendChild(div)
    
//   });
// };

// body = document.querySelector('body');

// const getApi = async () => {
//   try{
//   const response = await fetch(`https://api.coincap.io/v2/assets`)
//   dados = await response.json()
//   extractFiles(dados.data)
//   // console.log(dados.data);
//   } catch (error) {
//     console.log(error);
//   }
  
// };
// getApi()