// == HAMBURGER MENU ==
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});