(() => {
    const testimonialPostsSlider = document.querySelector(".testimonial-posts-slider");
    const testimonialButtons = document.querySelectorAll(".testimonial-buttons span");
    let lastClickedButton = testimonialButtons[0];

    testimonialButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
            testimonialPostsSlider.style.left = `calc(${i} * (-100% - 30px))`
            lastClickedButton.style.color = "#757575";
            button.style.color = "#4986fc";
            lastClickedButton = button;
        });
    });
})();