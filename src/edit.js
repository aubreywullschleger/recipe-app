import uuidv4 from "uuid/v4"

const titleEl = document.querySelector("#recipe-title")
const instructionsEl = document.querySelector("#recipe-instructions")
const ingredientNameEl = document.querySelector("#ingredient-name")
const addIngredientEl = document.querySelector("#add-ingredient")

let ingredientListEl = document.querySelector("#ingredient-list")

titleEl.addEventListener("input", e => console.log(e.target.value))
instructionsEl.addEventListener("input", e => console.log(e.target.value))
// ingredientNameEl.addEventListener("input", e => console.log(e.target.value))

const generateIngredientDOM = ingredient => {
  const checkbox = document.createElement("input")
  const label = document.createElement("label")
  const removeButton = document.createElement("button")

  checkbox.setAttribute("type", "checkbox")
  
}

addIngredientEl.addEventListener("click", e => {
  //current value of ingredientNameEl added to ingredient list in a new dom object
  console.log('add ingredient')
  console.log(ingredientNameEl.value)
  // generateIngredientDOM(ingredientNameEl.value)
})
