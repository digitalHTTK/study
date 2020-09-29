function setDocumentBackgroundColor (color) {
    document.body.style.background = color;
}

function setDocumentTextColor (color) {
    document.body.style.color = color;
}

window.addEventListener('contextmenu', e => {
    e.preventDefault();
});

let cells = Array.from(document.querySelectorAll("td"));
cells.forEach(cell => cell.addEventListener("mousedown", e => {
    let button = e.button;
    if (button === 0) {
        let color = e.target.style.backgroundColor;
        setDocumentBackgroundColor(color);
    } else if (button === 2) {
        let color = e.target.style.backgroundColor;
        setDocumentTextColor(color);
    }
}));