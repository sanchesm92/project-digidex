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
// reseta a lista 
const resetDigiContainer = () => {
  getDigiContainer.innerHTML = '';
};
// cria um elemento com o nome de todos os digimons
const addAllNamesList = async () => {
  resetDigiContainer();
  const list = await getAllDigimons();
  const createUl = document.createElement('ul');
  createUl.id = 'digiList';
  getDigiContainer.appendChild(createUl);
  const getDigiList = document.querySelector('#digiList');
  list.forEach((element) => {
    const createLi = document.createElement('li');
    createLi.innerText = element.name
    getDigiList.appendChild(createLi);
  });
};
// função que pega o digimon escolhido e adiciona no container
const addDigimon = async () => {
  resetDigiContainer();
  const verify = await verifyDigimon();
  if (verify === false) {
    window.alert("Invalid Name");
  } else {
    const getInputValue = document.querySelector('#digiInput').value;
    const digimon = await getDigimonByName(getInputValue.toLowerCase());
    const createName = document.createElement('h3');
    createName.innerText = digimon.name;
    const createLevel = document.createElement('h3');
    createLevel.innerText = digimon.level;
    const createImg = document.createElement('img');
    createImg.src = digimon.img;
    getDigiContainer.appendChild(createName);
    getDigiContainer.appendChild(createLevel);
    getDigiContainer.appendChild(createImg);
  }
};

window.onload = () => {
  getFindButton.addEventListener('click', addDigimon);
  getALlDigimonButton.addEventListener('click', addAllNamesList);
  getResetButton.addEventListener('click', resetDigiContainer);
};