const radioButtonsMobile = document.querySelectorAll('.radiobox__button_input-mobile');
const cardsContainer = document.querySelector('.cards-container');
const bikeCard = document.querySelector('.card');
let offset = 0;

export default function initBikeSlider() {
  radioButtonsMobile.forEach((button) => {
    button.addEventListener('click', (evt) => {
      switch (evt.target.value) {
        case 'left':
          offset = 0;
          break
        case 'center':
          offset = bikeCard.clientWidth;
          break
        case 'right':
          offset = bikeCard.clientWidth * 2;
          break
      }
      cardsContainer.style.left = -offset + 'px';
    })
  })
}