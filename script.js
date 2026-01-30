document.addEventListener('DOMContentLoaded', () => {
    // Safe slider initialization
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    if (slides && slides.length) {
        function showSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;
            slides[currentSlide].classList.add('active');
        }
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');
        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        setInterval(() => showSlide(currentSlide + 1), 6000);
    }

    // Navbar shrink on scroll (safe)
    const navbar = document.querySelector('header nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.style.padding = '10px 0';
            else navbar.style.padding = '15px 0';
        });
    }

    // Mobile nav toggle removed — nav links are always visible on small screens

    // Gestion du formulaire 'Nous contacter'
    const form = document.getElementById('contact-form');
    if (form) {
        const successBox = document.getElementById('contact-success');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const message = form.querySelector('textarea[name="message"]').value.trim();
            if (!name || !email || !message) {
                if (successBox) {
                    successBox.textContent = 'Veuillez remplir tous les champs.';
                    successBox.style.display = 'block';
                    successBox.style.background = '#fee';
                    successBox.style.color = '#900';
                } else {
                    alert('Veuillez remplir tous les champs.');
                }
                return;
            }
            const submitBtn = form.querySelector('.btn-submit');
            if (submitBtn) submitBtn.disabled = true;
            try {
                const formData = new FormData(form);
                const resp = await fetch('send_contact.php', { method: 'POST', body: formData });
                const result = await resp.json();
                if (resp.ok && result.success) {
                    if (successBox) {
                        successBox.textContent = result.message || 'Message envoyé. Merci.';
                        successBox.style.display = 'block';
                        successBox.style.background = '#ecfdf5';
                        successBox.style.color = '#065f46';
                    } else {
                        alert(result.message || 'Message envoyé. Merci.');
                    }
                    form.reset();
                } else {
                    const msg = result && result.message ? result.message : 'Erreur serveur, veuillez réessayer.';
                    if (successBox) {
                        successBox.textContent = msg;
                        successBox.style.display = 'block';
                        successBox.style.background = '#fee';
                        successBox.style.color = '#900';
                    } else {
                        alert(msg);
                    }
                }
            } catch (err) {
                if (successBox) {
                    successBox.textContent = 'Erreur réseau, veuillez réessayer.';
                    successBox.style.display = 'block';
                    successBox.style.background = '#fee';
                    successBox.style.color = '#900';
                } else {
                    alert('Erreur réseau, veuillez réessayer.');
                }
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                setTimeout(() => { if (successBox) successBox.style.display = 'none'; }, 6000);
            }
        });
    }
});