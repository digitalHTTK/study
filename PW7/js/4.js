// Разработать выплывающее меню

let menu = document.querySelector(".menu");
let main = document.querySelector(".main");
let button = document.querySelector(".menu-button");

button.addEventListener("click", () => {
    main.classList.toggle("main-open");
    menu.classList.toggle("menu-open");
})
