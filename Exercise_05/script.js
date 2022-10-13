
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
    console.log('test');


    bubbles[i] = document.createElement("div");
    bubbles[i].classList.add('animal');
    bubbles[i].style.position = 'absolute';
    bubbles[i].style.top = getRandomDuckPosition();
    bubbles[i].style.left = getRandomDuckPosition();

    createWave(bubbles[i]);

    const main = document.querySelector("main");

    main.insertBefore(bubbles[i], main.firstChild);
}



document.addEventListener('click', (e) => {
    const animal = e.target.closest('.animal');

    if (animal !== null) {
        animal.classList.add('visible');
    }
});