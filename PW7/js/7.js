let images = [
    "img/achovsmisle.jpg",
    "img/atovkaramysle.jpg",
    "img/doge.jpg",
    "img/chad.png"
];


let imageNumber = 0;
let img = document.querySelector("img");

setInterval(() => 
    {
        img.src = images[imageNumber];
        imageNumber++;
        if (imageNumber === 4) imageNumber = 0;
    }, 700)