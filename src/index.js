import './pages/index.scss';
import initSlider from './scripts/slider.js';
import initBikeSelector from './scripts/bike-selector.js';
import initBikeSlider from './scripts/bike-slider.js';

const burgerMenuButton = document.querySelector('.menu__button');
const burgerMenuIcon = burgerMenuButton.querySelector('.menu__button-icon')
burgerMenuButton.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('menu__button-icon_active');
});
initSlider();
initBikeSelector();
initBikeSlider();