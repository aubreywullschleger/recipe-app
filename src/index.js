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

import { createRecipe } from "./recipes"

const addRecipeEl = document.querySelector("#create-recipe")

addRecipeEl.addEventListener("click", e => {
  const id = createRecipe()
  window.location.assign(`./edit.html#${id}`)
})