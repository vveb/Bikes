import './pages/index.scss';
import initSlider from './scripts/slider.js';

const burgerMenuButton = document.querySelector('.menu__button');
const burgerMenuIcon = burgerMenuButton.querySelector('.menu__button-icon')
burgerMenuButton.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('menu__button-icon_active');
});
initSlider();

const bikeTexts = {
  highway: {
    'left': 'Cervelo Caledonia-5',
    'center': 'Cannondale Systemsix Himod',
    'right': 'Trek Domane SL-7'
  },
  gravel: {
    'left': 'Cervelo Aspero GRX 810',
    'center': 'Specialized S-Works Diverge',
    'right': 'Cannondale Topstone Lefty 3'
  },
  tt: {
    'left': 'Specialized S-Works Shiv',
    'center': 'BMC Timemachine 01 ONE',
    'right': 'Cervelo P-Series'
  },
}

const radioButtons = document.querySelectorAll('.radiobox__button_hidden');
const cardImages = document.querySelectorAll('.card__image');
const cardCaptions = document.querySelectorAll('.card__caption');
const cardSelector = document.querySelector('.selector');
let choice = 'highway';

function changeCards(evt) {
  if (choice === evt.target.value) {
    return;
  }
  choice = evt.target.value;
  cardImages.forEach((cardImage) => {
    if (cardImage.name === choice) {
      cardImage.classList.remove('card__image_hidden');
    } else {
      cardImage.classList.add('card__image_hidden');
    }
  })
  cardCaptions.forEach((cardCaption) => {
    cardCaption.classList.add('switch-caption');
    setTimeout(() => {
      cardCaption.textContent = bikeTexts[choice][cardCaption.ariaLabel];
    }, 250);
    setTimeout(() => {
      cardCaption.classList.remove('switch-caption');
    }, 500);
  })
}

radioButtons.forEach((button) => {
  button.addEventListener('click', (evt) => changeCards(evt));
})

cardSelector.addEventListener('change', (evt) => changeCards(evt));