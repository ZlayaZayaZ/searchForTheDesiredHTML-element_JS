const modalMain = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')

modalMain.className = 'modal modal_active'

const modal = document.querySelector('.show-success')
modal.onclick = () => {
    modalSuccess.className = 'modal modal_active'
    modalMain.className = 'modal'
}

let close = document.querySelectorAll('.modal__close_times') || [],
len = close.length;            

for (let i = 0; i < len; i++) {
    close[i].onclick = onclickClose(i);
}
    
function onclickClose(i) {
    return function () {
    const parent = close[i].closest('.modal_active')
    parent.className = 'modal'
    }
}

