const menuBarButton = document.getElementById("menu-bar-btn");
const navMenu = document.getElementById("nav-menu");

document.addEventListener('click', () => {
    if (menuBarButton.contains(event.target)) {
        navMenu.classList.toggle('show');
    } else if (!navMenu.contains(event.target)) {
        navMenu.classList.remove('show')
    }
});