'use stict'
const http = new XMLHttpRequest();
const host = 'http://localhost:8080';

let actualUrl = window.location.pathname.split('/');
http.open('GET', `${host}/api/runepages/${actualUrl[2].replace(`'`, '')}`, true);

const renderPage = () => {
  const response = JSON.parse(http.responseText);
  const mainContainer = document.querySelector('.mainContainer');
  const champTitle = document.createElement('h1');
  champTitle.innerText = `${actualUrl[2]}'s runepages`;
  mainContainer.appendChild(champTitle);

  response.rows.forEach(element => {
    const runeDataHolder = document.createElement('div');
    runeDataHolder.classList.add('runedataHolder');
    const runeHolderWidthControl = document.createElement('div');
    runeHolderWidthControl.classList.add('runedataHolderWidthControl');
    runeHolderWidthControl.innerHTML = `<p id="runedataHolderH2">${element.runepage_name}</p>`;
    mainContainer.appendChild(runeDataHolder);
    runeDataHolder.appendChild(runeHolderWidthControl);

    const runepagesHolder = document.createElement('div');
    runepagesHolder.classList.add('runepagesHolder');
    runeDataHolder.appendChild(runepagesHolder);

    const runeIconListHolderMain = document.createElement('ul');
    runeIconListHolderMain.classList.add('runeIconListHolderMain');
    runepagesHolder.appendChild(runeIconListHolderMain);

    const keystone = document.createElement('li');
    runeIconListHolderMain.appendChild(keystone);
    const keystoneDiv = document.createElement('div');
    keystoneDiv.classList.add('runeIconHolder');
    keystoneDiv.setAttribute('id', 'keyStoneRune');
    keystoneDiv.style.backgroundImage = `url('/assets/icons/${element.keystone_rune.split(' ').join('_').split(':').join('-')}_rune.png')`;
    keystone.appendChild(keystoneDiv);
    const keystoneTooltip = document.createElement('span');
    keystoneTooltip.innerText = `${element.keystone_rune}`;
    keystoneTooltip.classList.add('tooltipText')
    keystoneDiv.appendChild(keystoneTooltip);
    
    const mainRune1 = document.createElement('li');
    runeIconListHolderMain.appendChild(mainRune1);
    const mainRuneDiv1 = document.createElement('div');
    mainRuneDiv1.classList.add('runeIconHolder');
    mainRuneDiv1.style.backgroundImage = `url('/assets/icons/${element.main_rune_1.split(' ').join('_').split(':').join('-')}_rune.png')`;
    mainRune1.appendChild(mainRuneDiv1);
    const mainRune1Tooltip = document.createElement('span');
    mainRune1Tooltip.innerText = `${element.main_rune_1}`;
    mainRune1Tooltip.classList.add('tooltipTextSmall')
    mainRuneDiv1.appendChild(mainRune1Tooltip);
    
    const mainRune2 = document.createElement('li');
    runeIconListHolderMain.appendChild(mainRune2);
    const mainRuneDiv2 = document.createElement('div');
    mainRuneDiv2.classList.add('runeIconHolder');
    mainRuneDiv2.style.backgroundImage = `url('/assets/icons/${element.main_rune_2.split(' ').join('_').split(':').join('-')}_rune.png')`;
    mainRune2.appendChild(mainRuneDiv2);
    const mainRune2Tooltip = document.createElement('span');
    mainRune2Tooltip.innerText = `${element.main_rune_2}`;
    mainRune2Tooltip.classList.add('tooltipTextSmall')
    mainRuneDiv2.appendChild(mainRune2Tooltip);
    
    const mainRune3 = document.createElement('li');
    runeIconListHolderMain.appendChild(mainRune3);
    const mainRuneDiv3 = document.createElement('div');
    mainRuneDiv3.classList.add('runeIconHolder');
    mainRuneDiv3.style.backgroundImage = `url('/assets/icons/${element.main_rune_3.split(' ').join('_').split(':').join('-')}_rune.png')`;
    mainRune3.appendChild(mainRuneDiv3);
    const mainRune3Tooltip = document.createElement('span');
    mainRune3Tooltip.innerText = `${element.main_rune_3}`;
    mainRune3Tooltip.classList.add('tooltipTextSmall')
    mainRuneDiv3.appendChild(mainRune3Tooltip);
    
    const lesserRune1 = document.createElement('li');
    runeIconListHolderMain.appendChild(lesserRune1);
    const lesserRuneDiv1 = document.createElement('div');
    lesserRuneDiv1.classList.add('runeIconHolder');
    lesserRuneDiv1.setAttribute('id', 'LesserSpacer');
    lesserRuneDiv1.style.backgroundImage = `url('/assets/icons/${element.lesser_rune_1.split(' ').join('_').split(':').join('-')}_rune.png')`;
    lesserRune1.appendChild(lesserRuneDiv1);
    const lesserRune1Tooltip = document.createElement('span');
    lesserRune1Tooltip.innerText = `${element.lesser_rune_1}`;
    lesserRune1Tooltip.classList.add('tooltipTextSmall')
    lesserRuneDiv1.appendChild(lesserRune1Tooltip);
    
    const lesserRune2 = document.createElement('li');
    runeIconListHolderMain.appendChild(lesserRune2);
    const lesserRuneDiv2 = document.createElement('div');
    lesserRuneDiv2.classList.add('runeIconHolder');
    lesserRuneDiv2.style.backgroundImage = `url('/assets/icons/${element.lesser_rune_2.split(' ').join('_').split(':').join('-')}_rune.png')`;
    lesserRune2.appendChild(lesserRuneDiv2);
    const lesserRune2Tooltip = document.createElement('span');
    lesserRune2Tooltip.innerText = `${element.lesser_rune_2}`;
    lesserRune2Tooltip.classList.add('tooltipTextSmall')
    lesserRuneDiv2.appendChild(lesserRune2Tooltip);
  });
};

http.onload = () => {
  renderPage();
};

http.send();