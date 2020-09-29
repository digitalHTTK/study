let body = document.body;
let img = body.querySelector("img");

body.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX,
        mouseY = e.clientY;
    img.style.left = mouseX + "px";
    img.style.top = mouseY + "px";
});
