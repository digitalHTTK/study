let input = document.querySelector("input");

input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[A-Z]/g, "");
})