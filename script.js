const getFindButton = document.querySelector('#digiFind');
const getALlDigimonButton = document.querySelector('#allDigimons');
const getResetButton = document.querySelector('#digiReset');
const getDigiContainer = document.querySelector('#digiContainer');

// retorna um array com a lista de todos digimons name, img, level
const getAllDigimons = () => {
const url = `https://digimon-api.vercel.app/api/digimon`;
const result = fetch(url)
.then((response) => response.json())
.then((data) => data);
return result
};