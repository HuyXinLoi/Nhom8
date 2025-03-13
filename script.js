document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-title");
    sections.forEach(section => {
        section.addEventListener("mouseenter", function () {
            this.style.color = "#ff4500";
        });
        section.addEventListener("mouseleave", function () {
            this.style.color = "#007bff";
        });
    });
});