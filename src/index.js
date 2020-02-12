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

// Set up filter with search text
document.querySelector("#search-text").addEventListener("input", e => {
  setFilters({
    searchText: e.target.value
  })
  renderRecipes()
})