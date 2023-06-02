const subscribeForm = document.forms['subscribe-form'];
const subscribeFormInput = document.forms['subscribe-form']['subscribe-form-input'];
const subscribeFormButton = document.forms['subscribe-form']['subscribe-form-submit-button'];

export default function initSubscribeForm() {
  subscribeFormInput.addEventListener('input', () => {
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
}
