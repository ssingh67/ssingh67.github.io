let slideIndex = 1;

function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

document.getElementById("home-link").addEventListener("click", () => showSection("home"));
document.getElementById("about-link").addEventListener("click", () => showSection("about"));
document.getElementById("best-times-link").addEventListener("click", () => showSection("best-times"));
document.getElementById("locations-link").addEventListener("click", () => showSection("locations"));
document.getElementById("how-to-link").addEventListener("click", () => showSection("how-to"));
document.getElementById("why-link").addEventListener("click", () => showSection("why"));
document.getElementById("ai-link").addEventListener("click", () => showSection("ai"));

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

showSlides(slideIndex);

document.getElementById("prev-slide").addEventListener("click", () => plusSlides(-1));
document.getElementById("next-slide").addEventListener("click", () => plusSlides(1));

