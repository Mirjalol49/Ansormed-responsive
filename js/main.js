var elBurgerBtn = document.querySelector(".burger-menu");
var elHiddenHeader = document.querySelector(".hidden-header");
var elBurgerImg = document.querySelector(".burger-menu__img");

var icon = true;

elBurgerBtn.addEventListener("click", function() {
    elHiddenHeader.classList.toggle("shownav");

    if (icon) {
        elBurgerImg.src = "../img/close-menu.svg";
        icon = false;
    } else {
        elBurgerImg.src = "../img/burger-menu-open.svg";
        icon = true;
    }
});