import uuidv4 from "uuid/v4"


const titleEl = document.querySelector("#recipe-title")
const instructionsEl = document.querySelector("#recipe-instructions")
const ingredientNameEl = document.querySelector("#ingredient-name")
const addIngredientEl = document.querySelector("#add-ingredient")

let ingredientListEl = document.querySelector("#ingredient-list")

titleEl.addEventListener("input", e => console.log(e.target.value))
instructionsEl.addEventListener("input", e => console.log(e.target.value))

// Generate new ingredient element
const generateIngredientDOM = ingredient => {
  const listItem = document.createElement("div")

  const ingredientCheckbox = document.createElement("div")
  const checkbox = document.createElement("input")
  const label = document.createElement("label")

  const removeButton = document.createElement("button")

  const id = uuidv4()

  // Set up list item
  listItem.classList.add("list-item")

  // Set up ingredient checkbox
  ingredientCheckbox.classList.add("list-item__ingredient-checkbox")
  listItem.appendChild(ingredientCheckbox)

  // Set up checkbox
  checkbox.setAttribute("type", "checkbox")
  checkbox.id = `${id}`
  checkbox.name = "ingredient"
  checkbox.classList.add("list-item__checkbox")  
  ingredientCheckbox.appendChild(checkbox)

  // Set up label
  label.setAttribute("for", `${id}`)
  label.classList.add("list-item__label")
  label.innerHTML = ingredient
  ingredientCheckbox.appendChild(label)

  // Set up button
  removeButton.classList.add("list-item__button")
  removeButton.innerHTML = "Remove"
  listItem.appendChild(removeButton)

  return listItem
}

// Add ingredient event
addIngredientEl.addEventListener("click", e => {
  if (ingredientNameEl.value.length > 0) {
    ingredientListEl.appendChild(generateIngredientDOM(ingredientNameEl.value))
  }
  ingredientNameEl.value = ""
})

// Trigger add ingredient event on enter keypress
ingredientNameEl.addEventListener("keyup", e => {
  // e.preventDefault()
  if (e.code === "Enter" ) {
    addIngredientEl.click()
  }
})
