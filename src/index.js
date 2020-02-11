import { renderRecipes } from "./views"
import { createRecipe } from "./recipes"

// Start app by rendering recipes
renderRecipes()

// Setup add recipe button
const addRecipeEl = document.querySelector("#create-recipe")
addRecipeEl.addEventListener("click", e => {
  const id = createRecipe()
  window.location.assign(`./edit.html#${id}`)
})

// Listen for click on recipe item
document.addEventListener("click", e => {
  const id = e.target.id
  const partialIdEnd = id.substring(12)

  if (e.target.classList[0].substring(0,11) === "recipe-item") {
    window.location.assign(`./edit.html#${partialIdEnd}`)
  }
})