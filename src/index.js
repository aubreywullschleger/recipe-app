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

import uuidv4 from "uuid/v4"
import { loadRecipes, generateRecipeCardDOM } from "./recipes"

const addRecipeEl = document.querySelector("#create-recipe")

const recipes = loadRecipes()
generateRecipeCardDOM(recipes)

addRecipeEl.addEventListener("click", e => {
  const id = uuidv4()
  window.location.assign(`./edit.html#${id}`)
})