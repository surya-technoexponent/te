const animateElsOnSetChange = document.getElementsByClassName('animate-on-set-change')

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
const flip = (element) => {
    element.classList.toggle("animate-flip")
}
const slideRight = (element) => {
    element.classList.toggle("animate-slide-right")
}
const slideLeft = (element) => {
    element.classList.toggle("animate-slide-left")
}
const fade = (element) => {
    element.classList.toggle("animate-fade")
}
const animations = [flip, slideRight, slideLeft, fade]
window.addEventListener('load', () => {
    setInterval(() => {
        const randomIndex = getRandomArbitrary(0, 3)
        for (let el of animateElsOnSetChange) {
            animations[randomIndex](el)
        }
    }, setChangeInterval);
})