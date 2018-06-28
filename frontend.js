'use stict'
const http = new XMLHttpRequest();
const host = 'http://localhost:8080'
http.open('GET', `${host}/api/champions_list`, false);

const renderPage = () => {
  const response = JSON.parse(http.responseText);
  const ul = document.querySelector('ul');

  response.champions.forEach(element => {
    const champion = document.createElement('li');
    champion.innerHTML = `<div class="champIcons" id="icon${element.champ_id}"><p>${element.champ_name}</p></div>`;
    ul.appendChild(champion);
    document.querySelector(`#icon${element.champ_id}`).style.backgroundImage = `url('./img/${element.champ_name.replace(`'`, '')}.png')`;
    document.querySelector(`#icon${element.champ_id}`).style.fontSize = `${29 - element.champ_name.length}px`;
  });
};

http.onload = () => {
  renderPage();
}

http.send();

const icons = document.querySelectorAll('.champIcons');
icons.forEach(element => {
  element.addEventListener('click', () => {
    console.log('kiscica');
  });
});