'use strict';

const precisionRunes = [
  ['Press the Attack', 'Lethal Tempo', 'Fleet Footwork', 'Conqueror'],
  ['Overheal', 'Triumph', 'Presence of Mind'],
  ['Legend: Alacricity', 'Legend: Tenacity', 'Legend: Bloodline'],
  ['Coup de Grace', 'Cut Down', 'Last Stand']
];
const dominationRunes = [
  ['Electrocute', 'Predator', 'Dark Harvest', 'Hail of Blades'],
  ['Cheap Shot', 'Taste of Blood', 'Sudden Impact'],
  ['Yombie Ward', 'Ghost Poro', 'Eyeball Collection'],
  ['Ravenous Hunter', 'Ingenious Hunter', 'Relentless Hunter', 'Ultimate Hunter']
];
const sorceryRunes = [
  ['Summon Aery', 'Arcane Comet', 'Phase Rush'],
  ['Nullifzing Orb', 'Manaflow Band', 'Nimbus Cloak'],
  ['Transcendence', 'Celerity', 'Absolute Focus'],
  ['Scortch', 'Waterwalking', 'Gathering Storm']
];
const resolveRunes = [
  ['Grasp of the Undying', 'Aftershock', 'Guardian'],
  ['Demolish', 'Font of Life', 'Bone Plating'],
  ['Conditioning', 'Second Wind', 'Chrysalis'],
  ['Overgrowth', 'Revitalize', 'Unflinching']
];
const inspirationRunes = [
  ['Glacial Augment', 'Kleptomancy', 'Unsealed Spellbook'],
  ['Hextech Flashtraption', 'Magical Footwear', 'Perfect Timing'],
  ["Future's Market", 'Minion Dematerializer', 'Biscuit Delivery'],
  ['Cosmic Insight', 'Approach Velocity', 'Time Warp Tonic']
];

const runeSelectorForm = document.querySelector('.runeSelectorForm');
const mainPathRuneContainer = document.createElement('div');
mainPathRuneContainer.classList.add('mainPathRuneContainer');
runeSelectorForm.appendChild(mainPathRuneContainer);

document.addEventListener('change', function() {
  mainPathRuneContainer.innerHTML = '';
  let chosenPath = document.querySelectorAll('input[name="pathChoice"]:checked');
  if (chosenPath[0].value === 'precision') {
    console.log(precisionRunes);
    const chooseKeystoneDiv = document.createElement('div');
    chooseKeystoneDiv.classList.add('chooseKeystoneDiv');
    mainPathRuneContainer.appendChild(chooseKeystoneDiv);
    precisionRunes[0].forEach(element => {
      const newKeystoneLabel = document.createElement('label');
      newKeystoneLabel.innerHTML =`<input type="radio" value="element" name="keystoneChoice"><img src="/assets/icons/${element.split(' ').join('_').split(':').join('-')}_rune.png">`;
      
      chooseKeystoneDiv.appendChild(newKeystoneLabel);
    });   
  }
  if (chosenPath[0].value === 'domination') {
    console.log(dominationRunes);
    const chooseKeystoneDiv = document.createElement('div');
    chooseKeystoneDiv.classList.add('chooseKeystoneDiv');
    mainPathRuneContainer.appendChild(chooseKeystoneDiv);
    dominationRunes[0].forEach(element => {
      const newKeystoneLabel = document.createElement('label');
      newKeystoneLabel.innerHTML = `<input type="radio" value="${element}" name="keystoneChoice"><img src="/assets/icons/${element.split(' ').join('_').split(':').join('-')}_rune.png">`;
      chooseKeystoneDiv.appendChild(newKeystoneLabel);
    });
  }
  if (chosenPath[0].value === 'sorcery') {
    console.log(sorceryRunes);
    const chooseKeystoneDiv = document.createElement('div');
    chooseKeystoneDiv.classList.add('chooseKeystoneDiv');
    mainPathRuneContainer.appendChild(chooseKeystoneDiv);
    sorceryRunes[0].forEach(element => {
      const newKeystoneLabel = document.createElement('label');
      newKeystoneLabel.innerHTML = `<input type="radio" value="${element}" name="keystoneChoice"><img src="/assets/icons/${element.split(' ').join('_').split(':').join('-')}_rune.png">`;
      chooseKeystoneDiv.appendChild(newKeystoneLabel);
    });
  }
  if (chosenPath[0].value === 'resolve') {
    console.log(resolveRunes);
    const chooseKeystoneDiv = document.createElement('div');
    chooseKeystoneDiv.classList.add('chooseKeystoneDiv');
    mainPathRuneContainer.appendChild(chooseKeystoneDiv);
    resolveRunes[0].forEach(element => {
      const newKeystoneLabel = document.createElement('label');
      newKeystoneLabel.innerHTML = `<input type="radio" value="${element}" name="keystoneChoice"><img src="/assets/icons/${element.split(' ').join('_').split(':').join('-')}_rune.png">`;
      chooseKeystoneDiv.appendChild(newKeystoneLabel);
    });
  }
  if (chosenPath[0].value === 'inspiration') {
    console.log(inspirationRunes);
    const chooseKeystoneDiv = document.createElement('div');
    chooseKeystoneDiv.classList.add('chooseKeystoneDiv');
    mainPathRuneContainer.appendChild(chooseKeystoneDiv);
    inspirationRunes[0].forEach(element => {
      const newKeystoneLabel = document.createElement('label');
      newKeystoneLabel.innerHTML = `<input type="radio" value="${element}" name="keystoneChoice"><img src="/assets/icons/${element.split(' ').join('_').split(':').join('-')}_rune.png">`;
      chooseKeystoneDiv.appendChild(newKeystoneLabel);
    });
  }
})
