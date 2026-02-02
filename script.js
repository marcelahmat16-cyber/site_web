// Carousel pour la carte Bobinage
document.addEventListener('DOMContentLoaded', function() {
    const carouselsBobinage = document.querySelectorAll('.carousel-bobinage');
    carouselsBobinage.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img-bobinage');
        let current = 0;
        setInterval(() => {
            images[current].style.opacity = 0;
            current = (current + 1) % images.length;
            images[current].style.opacity = 1;
        }, 2000);
    });
});

// Carousel pour la carte Conseil
document.addEventListener('DOMContentLoaded', function() {
    const carouselsConseil = document.querySelectorAll('.carousel-conseil');
    carouselsConseil.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img-conseil');
        let current = 0;
        setInterval(() => {
            images[current].style.opacity = 0;
            current = (current + 1) % images.length;
            images[current].style.opacity = 1;
        }, 2000);
    });
});
// Carousel pour la carte Maintenance
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-maintenance');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        let current = 0;
        setInterval(() => {
            images[current].style.opacity = 0;
            current = (current + 1) % images.length;
            images[current].style.opacity = 1;
        }, 2000);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fermer le menu mobile après avoir cliqué sur un lien
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });

    // Animation au scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});