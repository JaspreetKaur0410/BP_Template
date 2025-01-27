document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    navToggle.addEventListener("click", function () {
        mainNav.classList.toggle("open");
    });
});
