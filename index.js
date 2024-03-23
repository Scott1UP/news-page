const openMenu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");
const mobileNav = document.querySelector(".mob-nav-menu");

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

openMenu.addEventListener("click", event => {
    event.preventDefault();
    mobileNav.classList.remove("disabled");
    overlayOn();
});

closeMenu.addEventListener("click", event => {
    event.preventDefault();
    mobileNav.classList.add("disabled");
    overlayOff();
})
