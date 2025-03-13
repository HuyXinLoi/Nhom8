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

    // script.js
    // Cuộn mượt mà khi nhấp vào liên kết
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hiệu ứng cho header khi cuộn
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("bg-opacity-90");
        } else {
            header.classList.remove("bg-opacity-90");
        }
    });
});
