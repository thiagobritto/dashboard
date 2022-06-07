
const btnMenu = document.querySelector('.dh-btn-menu')
const navMenu = document.querySelector('.dm')
const clsMenu = document.querySelector('.dm-overlay')
const content = document.querySelector('.dc')

btnMenu.onclick = toggleMenu
clsMenu.onclick = toggleMenu

function toggleMenu(){
  navMenu.classList.toggle('dm-show')
  content.classList.toggle('dc-full')
}