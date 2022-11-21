const menuLink = document.querySelectorAll('.menu__link') || [],
len = menuLink.length; 

for (let i = 0; i < len; i++) {
    menuLink[i].onclick = () => {
        pastActive = document.querySelector('.menu_active')
        if (pastActive) {
            pastActive.className = 'menu menu_sub'
        }

        const parent = menuLink[i].closest('.menu__item')
        const child = parent.querySelector('ul')

        if (child) {
            if (pastActive == child) {
                return false
            }
            child.className = 'menu menu_sub menu_active'
            return false
        }

    }
}

