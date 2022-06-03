const body = document.querySelector('body')
body.style.backgroundColor = 'green'

sendToHtml = (dataCambio, dataMoedas) => {

  const filtred = dataCambio.filter(({ rank }) => rank <= 10)
  const maped = filtred.map(({ name, symbol, priceUsd}) => ({ name, symbol, priceUsd}))

  const cambio = dataMoedas.usd.brl
  console.log(cambio);
  maped.forEach(({name, symbol, priceUsd}) =>  {
    const div = document.createElement('div')
    div.innerHTML = `A Moeda ${name} que tem o preço em reais ${(priceUsd*cambio).toFixed(2)}, e que tem o símbolo ${symbol} `
    body.appendChild(div)

  })
    
};



const getApi = async () => {
  const urlUsd = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
  const urlMoedas = `https://api.coincap.io/v2/assets`

  const arrayResponse =  await Promise.all( [fetch( urlMoedas), fetch(urlUsd)])
  const data = await Promise.all(arrayResponse.map( async (element) => await element.json()))

  const [dataCambio, dataMoedas] = data

    sendToHtml(dataCambio.data, dataMoedas)

// console.log(dataMoedas);
};

window.onload = () => getApi()