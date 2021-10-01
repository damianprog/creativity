(() => {
  let testimonialPostsSlider;
  let testimonialButtons;
  let lastClickedButton;
  let testimonialPosts;
  let testimonialPostsAricles;

  const instantiateElements = () => {
    testimonialPostsSlider = document.querySelector(
      '.testimonial-posts-slider'
    );
    testimonialButtons = document.querySelectorAll('.testimonial-buttons span');

    lastClickedButton = testimonialButtons[0];

    testimonialPosts = document.querySelector('.testimonial-posts');
    testimonialPostsAricles = document.querySelectorAll(
      '.testimonial-posts article'
    );
  };

  instantiateElements();

  const mobileMedia = window.matchMedia('(max-width: 767px)');
  const mediumMedia = window.matchMedia('(max-width: 991px)');

  const resetSliderPosition = () => {
    testimonialPostsSlider.style = '';
    setActiveButton(testimonialButtons[0]);
  };

  mobileMedia.addEventListener('change', () => {
    resetSliderPosition();
  });

  mediumMedia.addEventListener('change', () => {
    resetSliderPosition();
  });

  const setActiveButton = (button) => {
    lastClickedButton.style.color = '#999';
    button.style.color = '#4986fc';
    lastClickedButton = button;
  };

  const setSliderPosition = (multiplier) => {
    testimonialPostsSlider.style.left = `calc(${multiplier} * (-100% - 30px))`;
  };

  testimonialButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      setSliderPosition(i);
      setActiveButton(button);
    });
  });

  const setTestimonialItemsWidth = () => {
    let style = '';
    const windowWidth = window.innerWidth;

    if (windowWidth <= 991) {
      const articleWidth =
        windowWidth > 767
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
