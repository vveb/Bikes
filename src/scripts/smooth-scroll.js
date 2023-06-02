function processLinkClick(evt) {
  evt.preventDefault();
  const targetBlock = document.getElementById(evt.target.getAttribute('href').substring(1));
  const topOffset = document.querySelector('.header').offsetHeight;
  if (targetBlock) {
    window.scrollBy({
      top: targetBlock.getBoundingClientRect().top - topOffset,
      behavior: 'smooth'
    })
  }
}

export default function initSmoothScroll() {
  const smoothScrolls = Array.from(document.querySelectorAll('.smooth-scroll'));
  smoothScrolls.forEach((element) => {
    element.addEventListener('click', processLinkClick);
  })
}