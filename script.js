let currentSlide = 1;

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === n - 1) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = currentSlide === 1 ? 2 : 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide === 2 ? 1 : 2;
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
