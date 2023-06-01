import './pages/index.scss';
import initSlider from './scripts/slider.js';
import initBikeSelector from './scripts/bike-selector.js';
import initBikeSlider from './scripts/bike-slider.js';
import initThemeSwitcher from './scripts/switch-theme.js';

const burgerMenuButton = document.querySelector('.menu__button');
const burgerMenuIcon = burgerMenuButton.querySelector('.menu__button-icon')
burgerMenuButton.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('menu__button-icon_active');
});
initSlider();
initBikeSelector();
initBikeSlider();
initThemeSwitcher();

const subscribeForm = document.forms['subscribe-form'];
const subscribeFormInput = document.forms['subscribe-form']['subscribe-form-input'];
const subscribeFormButton = document.forms['subscribe-form']['subscribe-form-submit-button'];
subscribeFormInput.addEventListener('input', (evt) => {
  subscribeFormButton.classList.remove('form__submit-button_hidden');
  if (subscribeFormInput.value === '') {
    subscribeFormButton.classList.add('form__submit-button_hidden');
  }
})
subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  subscribeFormButton.classList.add('form__submit-button_hidden');
  subscribeFormInput.value = 'Круто!';
})