import AnimaNumeros from './anima-numeros.js';

export default function FetchAnimais(url, alvo) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Fetch das informações de cada animal e cria o elemento usando createAnimal()
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(alvo);

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      
      const animaNumeros = new AnimaNumeros();
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  criarAnimais();
}
