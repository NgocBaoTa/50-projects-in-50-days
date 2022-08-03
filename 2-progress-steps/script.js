const progress = document.querySelector('.progress')
const next = document.querySelector('#next')
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll('.circle')


let circleActive = 1
next.addEventListener('click', () => {
    circleActive++

    if (circleActive > circles.length) {
        circleActive = circles.length
    }

    update()
})

prev.addEventListener("click", () => {
    circleActive--;

    if (circleActive < 1) {
        circleActive = 1;
    }

    update()
});

const update = () => {
    circles.forEach((circle, index) => {
        if (index < circleActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
     
    if (circleActive === 1) {
        prev.disabled = true
    } else if (circleActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false;
    }
}



