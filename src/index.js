import './pages/index.scss';

const burgerMenuButton = document.querySelector('.menu__button');
const burgerMenuIcon = burgerMenuButton.querySelector('.menu__button-icon')
burgerMenuButton.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('menu__button-icon_active');
});

const sliderTextContainer = document.querySelector('.slider__text-container');
const sliderImageContainer = document.querySelector('.slider__image-container');
const descriptionImageItem = sliderImageContainer.querySelector('.description__image');
let offsetText = 0;
let offsetImage = 0;

const nextButton = document.querySelector('.slider__button_type_next');
nextButton.addEventListener('click', () => {
  offsetText = offsetText + 100;
  offsetImage = offsetImage + descriptionImageItem.clientWidth;
  sliderTextContainer.style.left = -offsetText + 'vw';
  sliderImageContainer.style.left = -offsetImage + 'px';
  toggleButtonState();
})

const prevButton = document.querySelector('.slider__button_type_prev');
prevButton.addEventListener('click', () => {
  offsetText = offsetText - 100;
  offsetImage = offsetImage - descriptionImageItem.clientWidth;
  sliderTextContainer.style.left = -offsetText + 'vw';
  sliderImageContainer.style.left = -offsetImage + 'px';
  toggleButtonState();
})

function toggleButtonState() {
  if (offsetText >= 100 * 2) {
    nextButton.disabled = true;
    nextButton.classList.add('button_disabled');
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove('button_disabled');
  }

  if (offsetText <= 0) {
    prevButton.disabled = true;
    prevButton.classList.add('button_disabled');
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove('button_disabled');
  }
}
toggleButtonState();