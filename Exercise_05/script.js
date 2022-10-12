
function getRandomDuckPosition() {
    return Math.floor(Math.random() * (90-5+1)+ 5) + '%';
}

document.querySelector('.duck').style.top = getRandomDuckPosition();
document.querySelector('.duck').style.left = getRandomDuckPosition();