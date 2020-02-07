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

const addRecipeEl = document.querySelector("#create-recipe")

addRecipeEl.addEventListener("click", e => {
  const id = uuidv4()
  window.location.assign(`./edit.html#${id}`)
})