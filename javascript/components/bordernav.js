const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 365) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});