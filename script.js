// == HAMBURGER MENU ==
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav a');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    mobileNav.classList.remove('is-active');

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    });
});

// === FOR SMOOTH SCROLL ==
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// == EFFECT ==
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));