document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");
    const track = document.querySelector(".carousel-track");

    if (!slides.length || !dots.length || !track) {
        console.error("Carousel elements not found!");
        return;
    }

    function updateSlide() {
        const offset = -currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Reset all dots
        dots.forEach(dot => {
            dot.classList.remove("dot--fill");
            dot.style.backgroundColor = "#fff"; // Reset to white
        });

        // Highlight active dot
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("dot--fill");
            dots[currentSlide].style.backgroundColor = "#ffd8a8";
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    }

    function goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < slides.length) {
            currentSlide = slideIndex;
            updateSlide();
        }
    }

    // Attach event listeners to navigation buttons
    document.querySelector(".btn--left")?.addEventListener("click", prevSlide);
    document.querySelector(".btn--right")?.addEventListener("click", nextSlide);

    // Attach event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
    });

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 1000);
});
