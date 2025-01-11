document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.main-div-banner img');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('main-div-banneractive');
            if (i === index) {
                slide.classList.add('main-div-banneractive');
            }
        });
    }

    showSlide(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);
});
