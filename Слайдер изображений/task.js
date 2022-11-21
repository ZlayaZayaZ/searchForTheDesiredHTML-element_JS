const sliders = document.querySelectorAll('.slider__item'),
dots = document.querySelectorAll('.slider__dot')

let listSliders = Array.from(sliders),
len = listSliders.length,
index = listSliders.indexOf(document.querySelector('.slider__item_active'))

dots[index].className = 'slider__dot slider__dot_active'

for (let i = 0; i < len; i++) {
    dots[i].onclick = () => {
        sliders[index].className = 'slider__item'
        dots[index].className = 'slider__dot'
        index = i
        sliders[index].className = 'slider__item slider__item_active'
        dots[index].className = 'slider__dot slider__dot_active'
    }
}

const prev = document.querySelector('.slider__arrow_prev'),
next = document.querySelector('.slider__arrow_next')

prev.onclick = () => {
    sliders[index].className = 'slider__item'
    dots[index].className = 'slider__dot'
    index = index - 1
    if (index < 0) {
        index = index + len
    }
    sliders[index].className = 'slider__item slider__item_active'
    dots[index].className = 'slider__dot slider__dot_active'
}

next.onclick = () => {
    sliders[index].className = 'slider__item'
    dots[index].className = 'slider__dot'
    index = index + 1
    if (index > len - 1) {
        index = index - len
    }
    sliders[index].className = 'slider__item slider__item_active'
    dots[index].className = 'slider__dot slider__dot_active'
}
