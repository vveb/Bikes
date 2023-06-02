let theme = 0;
const page = document.querySelector('.page');
const switcherButton = document.querySelector('.theme-switcher__button');
const switcherIconLight = document.querySelector('.theme-switcher__icon_type_light');
const switcherIconDark = document.querySelector('.theme-switcher__icon_type_dark');

function switchTheme(newTheme) {
  if (theme === newTheme) {
    return;
  } else {
    switcherButton.classList.toggle('theme-switcher__button_on');
    page.classList.toggle('page_dark');
    theme = (theme + 1) % 2;
  }
}

export default function initThemeSwitcher() {
  switcherButton.addEventListener('click', () => switchTheme(theme + 1));
  switcherIconLight.addEventListener('click', () => switchTheme(0));
  switcherIconDark.addEventListener('click', () => switchTheme(1))
}