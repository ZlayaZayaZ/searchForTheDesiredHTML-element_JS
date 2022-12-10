const sliders = document.querySelectorAll('.slider__item'),
dots = document.querySelectorAll('.slider__dot')

let listSliders = Array.from(sliders),
len = listSliders.length,

index = listSliders.indexOf(document.querySelector('.slider__item_active'))
dots[index].className = 'slider__dot slider__dot_active'

function activeSlide (indexNew) {
    let indexPastActive = listSliders.indexOf(document.querySelector('.slider__item_active'))
    sliders[indexPastActive].className = 'slider__item'
    dots[indexPastActive].className = 'slider__dot'
    sliders[indexNew].className = 'slider__item slider__item_active'
    dots[indexNew].className = 'slider__dot slider__dot_active'
    index = indexNew
}

for (let i = 0; i < len; i++) {
    dots[i].onclick = () => {
        activeSlide (i)
    }
}

const prev = document.querySelector('.slider__arrow_prev'),
next = document.querySelector('.slider__arrow_next')

prev.onclick = () => {
    index = index - 1
    if (index < 0) {
        index = index + len
    }
    activeSlide (index)
}

next.onclick = () => {
    index = index + 1
    if (index > len - 1) {
        index = index - len
    }
    activeSlide (index)
}
