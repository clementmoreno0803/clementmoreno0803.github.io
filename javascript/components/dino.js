const start = document.querySelector('#work_title')
const dinogame = document.querySelector('.dinogame')
const dino = document.querySelector('#dino')
const cactus = document.querySelector('#cactus')
const cactus2 = document.querySelector('#cactus_deux')
const cactus3 = document.querySelector('#cactus_trois')
const cactus4 = document.querySelector('#cactus_scaled')


function jump() {
    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump')
    }, 800);
}
const isAlive = setInterval(function() {
    // get current dino Y position
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    const cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    const cactus2Left = parseInt(
        window.getComputedStyle(cactus2).getPropertyValue("left")
    );
    const cactus3Left = parseInt(
        window.getComputedStyle(cactus3).getPropertyValue("left")
    );
    const cactus4Left = parseInt(
        window.getComputedStyle(cactus4).getPropertyValue("left")
    );
    // detect collision
    if (cactusLeft < 100 && cactusLeft > 40 && dinoTop >= 140 || cactus2Left < 100 && cactus2Left > 40 && dinoTop >= 140 ||
        cactus3Left < 100 && cactus3Left > 40 && dinoTop >= 140 || cactus4Left < 100 && cactus4Left > 40 && dinoTop >= 140) {
        // collision
        alert("Allez, encore p'tite dernière ?!");
    }
}, 10);

window.addEventListener('keydown', (keypressed) => {
    if (start) {
        if (keypressed.key === "h") {
            dinogame.style.display = "block";
        }
        if (keypressed.key === "i" || keypressed.key === "r" || keypressed.key === "e") {
            jump()
        }
        if (keypressed.key === "m") {
            dinogame.style.display = "none";
        }
    }
})