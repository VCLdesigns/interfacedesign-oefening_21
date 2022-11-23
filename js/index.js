var menuButton = document.getElementById("menu_button");
var myTopNav = document.getElementById("nav_links");

menuButton.addEventListener("click", openCloseMenu);

function openCloseMenu() {

    menuButton.classList.toggle("menu_button_color");
    myTopNav.classList.toggle("nav_links_hidden");
}



