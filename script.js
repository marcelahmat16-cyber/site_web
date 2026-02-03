// Carousel pour la carte Bobinage
document.addEventListener('DOMContentLoaded', function() {
    const carouselsBobinage = document.querySelectorAll('.carousel-bobinage');
    carouselsBobinage.forEach(carousel => {
        carousel.style.height = '200px';
        carousel.style.overflow = 'hidden';
        const images = carousel.querySelectorAll('.carousel-img');
        images.forEach((img, index) => {
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '200px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            img.style.opacity = '0';
        });
        let current = 0;
        images[current].style.opacity = '1';
        images.forEach((img, index) => {
            img.style.transform = `translateX(${(index - current) * -100}%)`;
        });
        setInterval(() => {
            images.forEach(img => img.style.opacity = '0');
            current = (current + 1) % images.length;
            images[current].style.opacity = '1';
            images.forEach((img, index) => {
                img.style.transform = `translateX(${(index - current) * -100}%)`;
            });
        }, 2000);
    });
});

// Carousel pour la carte Conseil
document.addEventListener('DOMContentLoaded', function() {
    const carouselsConseil = document.querySelectorAll('.carousel-conseil');
    carouselsConseil.forEach(carousel => {
        carousel.style.height = '200px';
        carousel.style.overflow = 'hidden';
        const images = carousel.querySelectorAll('.carousel-img');
        images.forEach((img, index) => {
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '200px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            img.style.opacity = '0';
        });
        let current = 0;
        images[current].style.opacity = '1';
        images.forEach((img, index) => {
            img.style.transform = `translateX(${(index - current) * -100}%)`;
        });
        setInterval(() => {
            images.forEach(img => img.style.opacity = '0');
            current = (current + 1) % images.length;
            images[current].style.opacity = '1';
            images.forEach((img, index) => {
                img.style.transform = `translateX(${(index - current) * -100}%)`;
            });
        }, 2000);
    });
});

// Carousel pour la carte Maintenance
document.addEventListener('DOMContentLoaded', function() {
    const carouselsMaintenance = document.querySelectorAll('.carousel-maintenance');
    carouselsMaintenance.forEach(carousel => {
        carousel.style.height = '200px';
        carousel.style.overflow = 'hidden';
        const images = carousel.querySelectorAll('.carousel-img');
        images.forEach((img, index) => {
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '200px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            img.style.opacity = '0';
        });
        let current = 0;
        images[current].style.opacity = '1';
        images.forEach((img, index) => {
            img.style.transform = `translateX(${(index - current) * -100}%)`;
        });
        setInterval(() => {
            images.forEach(img => img.style.opacity = '0');
            current = (current + 1) % images.length;
            images[current].style.opacity = '1';
            images.forEach((img, index) => {
                img.style.transform = `translateX(${(index - current) * -100}%)`;
            });
        }, 2000);
    });
});

// Carousel pour la carte Fourniture
document.addEventListener('DOMContentLoaded', function() {
    const carouselsFourniture = document.querySelectorAll('.carousel-fourniture');
    carouselsFourniture.forEach(carousel => {
        carousel.style.height = '200px';
        carousel.style.width = '250px';
        carousel.style.margin = '0 auto';
        carousel.style.overflow = 'hidden';
        const images = carousel.querySelectorAll('.carousel-img');
        images.forEach((img, index) => {
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '200px';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '10px';
            img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            img.style.opacity = '0';
        });
        let current = 0;
        images[current].style.opacity = '1';
        images.forEach((img, index) => {
            img.style.transform = `translateX(${(index - current) * -100}%)`;
        });
        setInterval(() => {
            images.forEach(img => img.style.opacity = '0');
            current = (current + 1) % images.length;
            images[current].style.opacity = '1';
            images.forEach((img, index) => {
                img.style.transform = `translateX(${(index - current) * -100}%)`;
            });
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