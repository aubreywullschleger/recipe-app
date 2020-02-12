import { renderRecipes } from "./views"
import { createRecipe } from "./recipes"
import {setFilters} from "./filters"

// Start app by rendering recipes
renderRecipes()

// Setup add recipe button
document.querySelector("#create-recipe").addEventListener("click", e => {
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

// Set up filter with search text
document.querySelector("#search-text").addEventListener("input", e => {
  setFilters({
    searchText: e.target.value
  })
  renderRecipes()
})