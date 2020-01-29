const titleEl = document.querySelector("#recipe-title")
const instructionsEl = document.querySelector("#recipe-instructions")

titleEl.addEventListener("input", e => console.log(e.target.value))
instructionsEl.addEventListener("input", e => console.log(e.target.value))