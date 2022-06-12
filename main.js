/* 
const content = document.querySelector('.dc')

*/

const btnMenuMob = document.querySelector('#mob-btn-menu')
const btnMenuWeb = document.querySelector('#web-btn-menu')
const navMenu = document.querySelector('.ds>aside')
const clsMenu = document.querySelector('.ds>aside>div.overmenu')

btnMenuMob.onclick = toggleMenu
clsMenu.onclick = toggleMenu

btnMenuWeb.onclick = () => {
  navMenu.classList.toggle('menu-hide')
}

function toggleMenu(){
  navMenu.classList.toggle('menu-show')
} 