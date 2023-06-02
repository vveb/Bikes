let theme = 0;
const page = document.querySelector('.page');
const switcherButtons = document.querySelectorAll('.theme-switcher__button');
const switcherIconsLight = document.querySelectorAll('.theme-switcher__icon_type_light');
const switcherIconsDark = document.querySelectorAll('.theme-switcher__icon_type_dark');

function switchTheme(newTheme) {
  if (theme === newTheme) {
    return;
  } else {
    switcherButtons.forEach((button) => {
      button.classList.toggle('theme-switcher__button_on');
    });
    page.classList.toggle('page_dark');
    theme = (theme + 1) % 2;
  }
}

export default function initThemeSwitcher() {
  switcherButtons.forEach((button) => {
    button.addEventListener('click', () => switchTheme(theme + 1));
  })
  switcherIconsLight.forEach((icon) => {
    icon.addEventListener('click', () => switchTheme(0));
  })
  switcherIconsDark.forEach((icon) => {
    icon.addEventListener('click', () => switchTheme(1))
  })
}