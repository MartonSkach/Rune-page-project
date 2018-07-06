'use stict'
const http = new XMLHttpRequest();
const host = 'http://localhost:8080'
http.open('GET', `${host}/api/champions_list`, true);

const renderPage = () => {
  const response = JSON.parse(http.responseText);
  const ul = document.querySelector('#listHolder');

  response.champions.forEach(element => {
    const champion = document.createElement('li');
    champion.classList.add("championIconListElement");
    champion.innerHTML = `<div class="champIcons" id="icon${element.champ_id}">
    <a href="./runes/${element.champ_name}">
    <p class="iconText">${element.champ_name}</p>
    </a>
    </div>`;
    ul.appendChild(champion);
    document.querySelector(`#icon${element.champ_id}`).style.backgroundImage = `url('assets/imgs/${element.champ_name.replace(`'`, '')}.png')`;
    document.querySelector(`#icon${element.champ_id}`).style.fontSize = `${27 - element.champ_name.length}px`;
  });
};

http.onload = () => {
  renderPage();
}

http.send();


function searchListFunction() {
  let input, filter, ul, li, a, i;
  input = document.querySelector('#searchInput');
  filter = input.value.toUpperCase();
  ul = document.querySelector('ul');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll('.champIcons')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) !== -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    };
  };
};