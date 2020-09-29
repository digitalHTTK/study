let images = [
    "img/achovsmisle.jpg",
    "img/atovkaramysle.jpg",
    "img/doge.jpg",
    "img/chad.png"
];


let imageNumber = 0;
let img = document.querySelector("img");
img.src = images[3];

let buttonLeft = document.querySelector(".swipe-left"),
    buttonRight = document.querySelector(".swipe-right");

buttonLeft.addEventListener("click", (e) => {
    img.src = images[imageNumber];
    imageNumber--;
    if (imageNumber === -1) imageNumber = 3;
})

buttonRight.addEventListener("click", (e) => {
    img.src = images[imageNumber];
    imageNumber++;
    if (imageNumber === 4) imageNumber = 0;
})