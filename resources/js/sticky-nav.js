const header = document.querySelector('.main-header nav');

const toggleSticky = () => {
  if (window.pageYOffset > 150 && window.pageYOffset < 350) {
    header.className = `scrolled ${
      header.classList.contains('awake') || header.classList.contains('sleep')
        ? 'sleep'
        : ''
    }`;
  } else if (window.pageYOffset > 350) {
    header.className = 'scrolled awake';
  } else {
    header.classList = '';
  }
};

window.addEventListener('scroll', () => {
  toggleSticky();
});
