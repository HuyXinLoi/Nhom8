// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Cuộn mượt mà khi nhấp vào liên kết
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
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