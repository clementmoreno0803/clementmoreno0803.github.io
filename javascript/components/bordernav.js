const navbar = document.querySelector('nav');
export const initBorderNav = () => {
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 365) {
                navbar.classList.add('active');
            } else {
                navbar.classList.remove('active');
            }
        });
    }
}
export default initBorderNav