let img = document.querySelector("img");

img.addEventListener("keydown", (e) => {
    console.log("keke");
    if(!e.repeat) {
        if (e.key === "ArrowRight") {
            let num = parseInt(e.target.style.left);
            e.target.style.left = num + 100 + "px";
        }
        else if (e.key === "ArrowLeft") {
            let num = parseInt(e.target.style.left);
            e.target.style.left = num - 100 + "px";
        }
    }
    e.target
})