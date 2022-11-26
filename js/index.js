var menuButton = document.querySelector("#menu_button");
var menuLinks = document.querySelector("#nav_links");



menuButton.addEventListener("click", openOrClose);
function openOrClose(evt) {
    menuLinks.classList.toggle("nav_links_hidden");
    if (menuButton.style.color === ("var(--kleur_wit)")) {
        menuButton.style.color = "var(--kleur_zwart)"
    } else { menuButton.style.color = "var(--kleur_wit)" }
   

}
