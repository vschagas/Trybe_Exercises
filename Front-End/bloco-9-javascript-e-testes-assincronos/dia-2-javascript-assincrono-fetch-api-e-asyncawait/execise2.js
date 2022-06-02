const body = document.querySelector('body');
body.style.backgroundColor = 'green';


sendToHtml = (param) => {
  const maped = param.map(({ name, priceUsd}) => ({ name, priceUsd}))
  const filtred = maped.filter((element, index) => index <= 10)
  console.log(maped);

  filtred.forEach(({ name, priceUsd}) => {
    const div = document.createElement('div')
    div.className = 'moedas'
    div.innerHTML = `A moeda ${name} no momento está custando ${priceUsd}`
    body.appendChild(div)
    
  });
 };

const getApi = async () => {
  try{
  const response = await fetch(`https://api.coincap.io/v2/assets`);
  const dados = await response.json();
  sendToHtml(Object.values(dados)[0])
// console.log(Object.values(dados)[0]);
  } catch (error) {
    console.log(error);
  }
};
window.onload = () => getApi()