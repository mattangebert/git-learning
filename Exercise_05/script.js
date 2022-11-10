
function getRandomDuckPosition() {
    return Math.floor(Math.random() * (90-5+1)+ 5) + '%';
}

function createWave(element) {
    const waveWrapper = document.createElement("div");
    waveWrapper.classList.add('wave-wrapper')

    const wave = document.createElement("div");
    wave.classList.add('wave')

    waveWrapper.appendChild(wave);
    element.appendChild(waveWrapper);
}

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add('animal');
    bubble.style.position = 'absolute';
    bubble.style.top = getRandomDuckPosition();
    bubble.style.left = getRandomDuckPosition();

    createWave(bubble);

    const main = document.querySelector("main");
    main.insertBefore(bubble, main.firstChild);
}

const duck = document.querySelector('.duck');

duck.style.top = getRandomDuckPosition();
duck.style.left = getRandomDuckPosition();
createWave(duck);

document.querySelectorAll('.swan').forEach((e) => {
    e.style.top = getRandomDuckPosition();
    e.style.left = getRandomDuckPosition();
    createWave(e);
})

let bubbles = [];
for (let i = 0; i < 10; i++) {
   createBubble();
}

document.querySelectorAll('.animal').forEach((animal) => {
    const delay = (Math.random() * (5 + 1)) * 1000;

    for (let i = 0; i < animal.childNodes.length; i++) {
        if (animal.childNodes[i].classList !== undefined && animal.childNodes[i].classList.contains('wave-wrapper')) {
            animal.childNodes[i].classList.add('paused');

            setTimeout(() => {
                animal.childNodes[i].classList.remove('paused');
            }, delay)
        }
    }
});

document.addEventListener('click', (e) => {
    const animal = e.target.closest('.animal');

    if (animal !== null) {
        animal.classList.add('visible');

        if (animal.classList.contains('duck')) {
            setTimeout(function () {
                alert('GG you found the duck');
                location.reload();
            }, 1000)
        }

        if (!animal.classList.contains('duck') && !animal.classList.contains('swan')) {
            createBubble();
            animal.remove();
        }
    }
});