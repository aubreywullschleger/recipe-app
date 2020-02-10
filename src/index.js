// data model:
// recipe: {
//   title: "",
//   instructions: "",
//   ingredients: [
//     {
//       name: "",
//       hasIngredient: false
//     }
//   ],
//   id: 1234
// }
import { renderRecipes } from "./views"
import { loadRecipes, generateRecipeCardDOM, createRecipe } from "./recipes"

renderRecipes()

const addRecipeEl = document.querySelector("#create-recipe")

addRecipeEl.addEventListener("click", e => {
  const id = createRecipe()
  window.location.assign(`./edit.html#${id}`)
})

document.addEventListener("click", e => {
  const id = e.target.id
  const partialIdEnd = id.substring(12)

  if (e.target.classList[0].substring(0,11) === "recipe-item") {
    window.location.assign(`./edit.html#${partialIdEnd}`)
  }
})

window.addEventListener("storage",  e => {
  if (e.key === "recipes") {
    renderRecipes()
  }
})