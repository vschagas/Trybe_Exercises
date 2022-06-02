
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


// const cor = document.querySelector('#moedas')
// const body = document.querySelector('body')



// const fetchJoke = () => {
//   const url = `https://api.coincap.io/v2/assets`

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => arquivo(data) )
    
//   const arquivo = (data) =>{
//     data.forEach(element => {
      
//       div = document.createElement('div')
//       div.innerHtml = element
//       body.appendChild(div)
      
//     });
//   }

// }
// fetchJoke()