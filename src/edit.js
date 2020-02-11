import { generateIngredientDOM, toggleIngredientCheckbox, removeIngredient, createIngredient, renderIngredients, getIngredientList } from "./ingredients"
import { saveRecipes, createRecipe, updateRecipe } from "./recipes"
import { initializeEditPage } from "./views"

const ingredientNameEl = document.querySelector("#ingredient-name")
const addIngredientEl = document.querySelector("#add-ingredient")
const saveRecipeEl = document.querySelector("#save-recipe")
const ingredientListEl = document.querySelector("#ingredient-list")
const titleEl = document.querySelector("#recipe-title")
const instructionsEl = document.querySelector("#recipe-instructions")
const recipeId = location.hash.substring(1)

initializeEditPage(recipeId)

// Add ingredient event
addIngredientEl.addEventListener("click", e => {
  ingredientListEl.appendChild(generateIngredientDOM(createIngredient()))
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
  let url = window.location.href
  const recipe = updateRecipe(recipeId, {
    title: titleEl.value,
    instructions: instructionsEl.value,
    ingredients: getIngredientList()
  })
  window.location.assign("./index.html")
})

// Listen for has ingredient checkbox toggle 
document.addEventListener("click", e => {
  if(e.target.type === "checkbox") {
    toggleIngredientCheckbox(e.target.id)
  }
})

// Listen for remove ingredient click
document.addEventListener("click", e => {
  const id = e.target.id
  const partialIdStart = id.substring(0,16)
  const partialIdEnd = id.substring(17)

  if(e.target.type === "submit" && partialIdStart === "removeIngredient") {
    removeIngredient(partialIdEnd)
  }
})
