'use stict'

const champions = [
  { id: 1, name: "Aatrox" },
  { id: 2, name: "Ahri" },
  { id: 3, name: "Akali" },
  { id: 4, name: "Alistar" },
  { id: 5, name: "Amumu" },
  { id: 6, name: "Anivia" },
  { id: 7, name: "Annie" },
  { id: 8, name: "Ashe" },
  { id: 9, name: "Aurelion Sol" },
  { id: 10, name: "Azir" },
  { id: 11, name: "Bard" },
  { id: 12, name: "Blitzcrank" },
  { id: 13, name: "Brand" },
  { id: 14, name: "Braum" },
  { id: 15, name: "Caitlyn" },
  { id: 16, name: "Camille" },
  { id: 17, name: "Cassiopeia" },
  { id: 18, name: "Cho'Gath" },
  { id: 19, name: "Corki" },
  { id: 20, name: "Darius" },
  { id: 21, name: "Diana" },
  { id: 22, name: "Dr. Mundo" },
  { id: 23, name: "Draven" },
  { id: 24, name: "Ekko" },
  { id: 25, name: "Elise" },
  { id: 26, name: "Evelynn" },
  { id: 27, name: "Ezreal" },
  { id: 28, name: "Fiddlesticks" },
  { id: 29, name: "Fiora" },
  { id: 30, name: "Fizz" },
  { id: 31, name: "Galio" },
  { id: 32, name: "Gangplank" },
  { id: 33, name: "Garen" },
  { id: 34, name: "Gnar" }
];

const ul = document.querySelector('ul');

champions.forEach(element => {
  const champion = document.createElement('li');
  champion.innerHTML = `<div class="champIcons" id="icon${element.id}"><p>${element.name}</p></div>`;
  ul.appendChild(champion);
  document.querySelector(`#icon${element.id}`).style.backgroundImage = `url('./img/${element.name.replace(`'`, '')}.png')`;
  console.log(element.name.replace(`'`, ''));
});

const icons = document.querySelectorAll('.champIcons');
console.log(icons);

icons.forEach(element => {
  element.addEventListener('click', () => {
    console.log('kiscica');
  });
});