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
// retorna um objeto com o name img e level do digimon
const getDigimonByName = (digimon) => {
  const url =`https://digimon-api.vercel.app/api/digimon/name/${digimon}`;
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => data[0]);
  return result;
};
// função que verifica se existe ou não o digimon do input retorna true ou false
const verifyDigimon = async () => {
  const list = await getAllDigimons();
  const nameList = list.map((digimon) => digimon.name);// retorna um array com o nome de todos os digimons
  const getInputValue = document.querySelector('#digiInput').value;
  const result = nameList.some((digiName) => digiName.toLowerCase() === getInputValue.toLowerCase());
  return result;
};