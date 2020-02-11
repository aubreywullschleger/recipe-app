import { generateIngredientDOM, toggleIngredientCheckbox, removeIngredient, createIngredient, getIngredientList } from "./ingredients"
import { updateRecipe, deleteRecipe } from "./recipes"
import { initializeEditPage } from "./views"

const titleEl = document.querySelector("#recipe-title")
const instructionsEl = document.querySelector("#recipe-instructions")
const ingredientListEl = document.querySelector("#ingredient-list")
const ingredientNameEl = document.querySelector("#ingredient-name")
const addIngredientEl = document.querySelector("#add-ingredient")
const saveRecipeEl = document.querySelector("#save-recipe")
const deleteRecipeEl = document.querySelector("#delete-recipe")
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

// Save recipe event
saveRecipeEl.addEventListener("click", e => {
  updateRecipe(recipeId, {
    title: titleEl.value.length > 0 ? titleEl.value : "Recipe needs title",
    instructions: instructionsEl.value.length > 0 ? instructionsEl.value : "Recipe needs instructions",
    ingredients: getIngredientList()
  })
  window.location.assign("./index.html")
})

// Listen for delete recipe event
deleteRecipeEl.addEventListener("click", e => {
  deleteRecipe(recipeId)
  location.assign("./index.html")
})