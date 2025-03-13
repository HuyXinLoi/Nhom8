// Smooth scrolling cho menu
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Hiệu ứng fade-in khi cuộn
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in", "visible");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
