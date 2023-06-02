import './pages/index.scss';
import initSlider from './scripts/slider.js';
import initBikeSelector from './scripts/bike-selector.js';
import initBikeSlider from './scripts/bike-slider.js';
import initThemeSwitcher from './scripts/switch-theme.js';
import initSubscribeForm from './scripts/form-subscribe.js';
import initSmoothScroll from './scripts/smooth-scroll.js';

const burgerMenuButton = document.querySelector('.menu__button');
const burgerMenuIcon = burgerMenuButton.querySelector('.menu__button-icon')
const burgerPopup = document.querySelector('.burger-popup');
burgerMenuButton.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('menu__button-icon_active');
  burgerPopup.classList.toggle('burger-popup_opened');
});

initSlider();
initBikeSelector();
initBikeSlider();
initThemeSwitcher();
initSubscribeForm();
initSmoothScroll();