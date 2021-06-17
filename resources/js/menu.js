(() => {
  const nav = document.querySelector('.main-header nav');
  const menuToggle = nav.querySelector('.main-header-nav-top span');
  menuToggle.addEventListener('click', () => {
    header.classList.contains('nav-expanded')
      ? nav.classList.remove('nav-expanded')
      : nav.classList.add('nav-expanded');
  });
})();
