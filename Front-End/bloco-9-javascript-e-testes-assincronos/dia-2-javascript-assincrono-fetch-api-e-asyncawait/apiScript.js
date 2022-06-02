const { Http2ServerRequest } = require("http2");

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data));
    


};

let teste = document.getElementsByTagName('h1')
teste.innerHtml






window.onload = () => fetchJoke();