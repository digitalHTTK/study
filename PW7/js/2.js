let h1 = document.querySelectorAll("h1");
h1.forEach(h1 => h1.onclick = (e) => {
    let header = e.currentTarget;
    let p = header.parentNode.children[1];
    p.classList.toggle("invisible-item");
})