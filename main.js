var menu = document.querySelector(".navmobile-menu")
var mobilelinks = document.querySelector(".mobile-navigations")

function hamburgerHandler() {
    menu.classList.toggle('showMenu')
    mobilelinks.classList.toggle('show-mobile-navigations')
}