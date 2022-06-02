const getApi = async() => {
  try {
    const urlcambio = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
    const urlMoedas = '/currencies/usd.min.json'
const response = await fetch(` `) 
const dados = await response.json()
trataDados(dados.data);
  } catch (error) {
    console.error(error)
  }
};
getApi()