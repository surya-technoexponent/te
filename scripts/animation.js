const animateElsOnSetChange = document.getElementsByClassName('animate-on-set-change')

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
const rotate = (element) => {
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

const flip = (element) => {
    element.classList.toggle("flip")
}

const bounce = (element) => {
    element.classList.toggle("bounce")
}

const wobble = (element) => {
    element.classList.toggle("wobble")
}

const animations = [rotate, slideRight, slideLeft, fade]

const logoAnimation = [flip, bounce, wobble]
const logoAnimationCycleTime = [6000, 4000, 4000]

const logoSources = ["./assets/gif/Image20230630115755.gif", "./assets/gif/Image20230630115814.gif", "./assets/gif/Image20230630115817.gif", "./assets/gif/Image20230630115820.gif", "./assets/gif/Image20230630115823.gif", "./assets/gif/Image20230630115825.gif", "./assets/gif/Image20230630115835.gif", "./assets/gif/Image20230630115837.gif"]

let currentLogoSourceIndex = 0

const cycleThrough = (currentIndex, arrLength) => {
    if (arrLength === currentIndex  + 1) {
        return 0
    } else {
        return currentIndex + 1
    }
}

const logoRumble = document.getElementById("logo-rumble");
window.addEventListener("load", () => {
    let key = 0;
    handleRumbleLogo = setInterval(() => {
        key = cycleThrough(key, logoAnimation.length);
        logoAnimation[key](logoRumble);
        setTimeout(() => {
            logoAnimation[key](logoRumble);
        }, logoAnimationCycleTime[key]);
    }, (1000 * 60 * 1.5));
})

const logoElement = document.getElementById("animated-logo-top")
window.addEventListener("load", () => {
    handleTopRightLogo = setInterval(() => {
        currentLogoSourceIndex = cycleThrough(currentLogoSourceIndex, logoSources.length)
        logoElement.src = logoSources[currentLogoSourceIndex]
    }, (1000 * 60 * 1));
})