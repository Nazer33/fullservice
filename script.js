let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next-slide');
const prevButton = document.getElementById('prev-slide');
let slideInterval;

// Muestra el slide actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Elimina la clase 'active' de todos los slides
        slide.setAttribute('aria-hidden', 'true'); // Para accesibilidad
    });
    slides[index].classList.add('active'); // Agrega la clase 'active' al slide actual
    slides[index].setAttribute('aria-hidden', 'false'); // Actualiza la accesibilidad
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
}

function pauseSlideShow() {
    clearInterval(slideInterval);
}

// Inicia el slideshow
startSlideShow();
showSlide(currentSlide);

// Eventos para los botones
nextButton.addEventListener('click', () => {
    pauseSlideShow();
    nextSlide();
    startSlideShow();
});

prevButton.addEventListener('click', () => {
    pauseSlideShow();
    prevSlide();
    startSlideShow();
});

// Agregar eventos para pausar al pasar el mouse
const carrusel = document.querySelector('.carrusel');
carrusel.addEventListener('mouseenter', pauseSlideShow);
carrusel.addEventListener('mouseleave', startSlideShow);

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}
