import { generateIngredientDOM, getIngredientList, toggleIngredientCheckbox, getIngredientId } from "./ingredients"

const titleEl = document.querySelector("#recipe-title")
const instructionsEl = document.querySelector("#recipe-instructions")

let ingredientListEl = document.querySelector("#ingredient-list")
const ingredientNameEl = document.querySelector("#ingredient-name")
const addIngredientEl = document.querySelector("#add-ingredient")

const saveRecipeEl = document.querySelector("#save-recipe")

titleEl.addEventListener("input", e => console.log(e.target.value))
instructionsEl.addEventListener("input", e => console.log(e.target.value))



// Add ingredient event
addIngredientEl.addEventListener("click", e => {
  if (ingredientNameEl.value.length > 0) {
    ingredientListEl.appendChild(generateIngredientDOM(ingredientNameEl.value))
  }
  ingredientNameEl.value = ""
})

// Trigger add ingredient event on enter keypress
ingredientNameEl.addEventListener("keyup", e => {
  if (e.code === "Enter" ) {
    addIngredientEl.click()
  }
})

// Save recipe event
saveRecipeEl.addEventListener("click", e => {
  getIngredientList()
  window.location.assign("./index.html")
})

// Listen for has ingredient checkbox toggle 
document.addEventListener("click", e => {
  if(e.target.type === "checkbox") {
    toggleIngredientCheckbox(e.target.id)
  }
})
