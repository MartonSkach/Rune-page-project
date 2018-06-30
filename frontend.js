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
    console.log(element.id.slice(4, 11));
    console.log(element.innerText);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${host}/championpage/:name?/runes`, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      id: element.id.slice(4, 11)
    }));
    window.location.assign(`${host}/championpage/${element.innerText}/runes`);
    element.preventDefault();
  });
});

function searchListFunction() {
 let input, filter, ul, li, a, i;
  input = document.querySelector("#searchInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector("ul");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll(".champIcons")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) !== -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    };
  };
};