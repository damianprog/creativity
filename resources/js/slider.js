(() => {
  const testimonialPostsSlider = document.querySelector(
    '.testimonial-posts-slider'
  );
  const testimonialButtons = document.querySelectorAll(
    '.testimonial-buttons span'
  );
  let lastClickedButton = testimonialButtons[0];

  testimonialButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      testimonialPostsSlider.style.left = `calc(${i} * (-100% - 30px))`;
      lastClickedButton.style.color = '#757575';
      button.style.color = '#4986fc';
      lastClickedButton = button;
    });
  });

  const testimonialPosts = document.querySelector('.testimonial-posts');
  const testimonialPostsAricles = document.querySelectorAll(
    '.testimonial-posts article'
  );

  const setTestimonialItemsWidth = () => {
    let style = '';
    const windowWidth = window.innerWidth;

    if (windowWidth <= 991) {
      const articleWidth =
        windowWidth > 600
          ? testimonialPosts.offsetWidth / 2 - 15
          : testimonialPosts.offsetWidth;
      style = `flex-basis: ${articleWidth}px`;
    }

    testimonialPostsAricles.forEach((article) => {
      article.style = style;
    });
  };

  setTestimonialItemsWidth();

  window.addEventListener('resize', setTestimonialItemsWidth);
})();
