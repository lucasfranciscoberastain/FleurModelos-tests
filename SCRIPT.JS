function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}


function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const burger = document.querySelector(".hamburger");

    nav.classList.toggle("show");
    burger.classList.toggle("active");
}

// EFECTO SUAVE DE APARICIÓN
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 1s ease";
    observer.observe(sec);
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}
