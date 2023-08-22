var menu = document.querySelector(".navmobile-menu")
var mobilelinks = document.querySelector(".mobile-navigations")
var backdrop = document.querySelector(".backdrop")

function hamburgerHandler() {
    menu.classList.toggle('showMenu')
    backdrop.classList.toggle('show-backdrop')
    mobilelinks.classList.toggle('show-mobile-navigations')
}