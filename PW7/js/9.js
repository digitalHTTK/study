function setImage(url, obj) {
    let image = obj.querySelector("img");
    image.src = url;
    obj.classList.add("show");
    console.log(obj);
}

function closeImage(obj) {
    let image = obj.querySelector("img");
    image.src = "";
    obj.classList.remove("show");
}

let obj = document.querySelector(".images");
let bigImage = document.querySelector(".big-image");
let images = obj.querySelectorAll("img");
let bigImageBackground = bigImage.querySelector(".background");

for (let img of images) img.addEventListener("click", (e) => setImage(e.target.src, bigImage));
bigImageBackground.addEventListener("click", () => closeImage(bigImage));
