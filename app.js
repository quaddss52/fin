const hamMenu = document.querySelector('.hamMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')




openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show(){
    hamMenu.style.display = 'flex'
    hamMenu.style.top = '0'
}
function close(){
    hamMenu.style.top = '-100%'
}