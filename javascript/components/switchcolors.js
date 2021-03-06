    const theme = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5'];
    const nav = document.querySelector('nav')
    const projects = document.querySelector('.projets')


    let previousNumber = -1
    document.body.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * 5);
        while (previousNumber === randomNumber) {
            randomNumber = Math.floor(Math.random() * 5);
        }
        const selectedTheme = theme[randomNumber]
        document.body.className = ""
        previousNumber = randomNumber
        const intro = document.querySelector('.introduction')

        if (intro) {
            console.log(intro);
            const result = document.body.classList.add(selectedTheme);
        }
    })
    nav.addEventListener('click', (e) => {
        e.stopPropagation()
    })
    projects.addEventListener('click', (e) => {
        e.stopPropagation()
    })