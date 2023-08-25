let fondo = document.querySelector(".fondo__menu");
let menu = document.querySelector(".nav__mob");
let btn = document.querySelector("#btnMenu");
let btnCerrar = document.querySelector("#btnMenuClose");

btn.addEventListener("click", () => {

    menu.classList.add("menu");
    fondo.classList.add("menu");
})

btnCerrar.addEventListener("click", () => {

    menu.classList.remove("menu");
    fondo.classList.remove("menu");
})