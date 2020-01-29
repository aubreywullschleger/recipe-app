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

const addRecipeEl = document.querySelector("#add-recipe")
console.log(addRecipeEl)

addRecipeEl.addEventListener("click", e => {
  let recipe = {
    id: uuidv4()
  }
  window.location.assign(`./edit.html#${recipe.id}`)
})