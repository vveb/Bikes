const nextButton = document.querySelector('.slider__button_type_next');
const prevButton = document.querySelector('.slider__button_type_prev');
const sliderTextContainer = document.querySelector('.slider__text-container');
const sliderImageContainer = document.querySelector('.slider__image-container');
const descriptionImageItem = sliderImageContainer.querySelector('.description__image');
const descriptionIcon = document.querySelector('.description__icon');
let offsetText = 0;
let offsetImage = 0;

const iconModificators = {
  0: 'description__icon_type_highway',
  100: 'description__icon_type_gravel',
  200: 'description__icon_type_tt',
}

function showNextSlide() {
  offsetText = offsetText + 100;
  changeIcon(offsetText - 100, offsetText);
  offsetImage = offsetImage + descriptionImageItem.clientWidth;
  sliderTextContainer.style.left = -offsetText + 'vw';
  sliderImageContainer.style.left = -offsetImage + 'px';
  toggleButtonState();
  animateIcon();
}

function showPreviousSlide() {
  offsetText = offsetText - 100;
  changeIcon(offsetText + 100, offsetText);
  offsetImage = offsetImage - descriptionImageItem.clientWidth;
  sliderTextContainer.style.left = -offsetText + 'vw';
  sliderImageContainer.style.left = -offsetImage + 'px';
  toggleButtonState();
  animateIcon();
}

function changeIcon(from, to) {
  descriptionIcon.classList.remove(iconModificators[from]);
  descriptionIcon.classList.add(iconModificators[to]);
}

function animateIcon() {
  descriptionIcon.classList.add('switch-icon');
  setTimeout(() => {
    descriptionIcon.classList.remove('switch-icon');
  }, 500)
}

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

export default function initSlider() {
  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPreviousSlide);
  toggleButtonState();
}