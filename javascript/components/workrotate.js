const work = document.querySelectorAll('.asset')
if (work) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1200) {
            work.forEach((e) => {
                e.classList.add('active')
            })
        }
    });
}