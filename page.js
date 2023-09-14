document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", function() {
        // Toggle a class on button click to change background color
        document.body.classList.toggle("dark-mode");
    });
});