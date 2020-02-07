import uuidv4 from "uuid/v4"

let ingredientList = {}

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
  removeButton.id = `removeIngredient-${id}`
  removeButton.innerHTML = "Remove"
  listItem.appendChild(removeButton)

  ingredientList[id] = {
    name: ingredient,
    hasIngredient: checkbox.checked
  }

  return listItem
}

// Get ingredients 
const getIngredientList = () => ingredientList

// Toggle ingredient checkbox
const toggleIngredientCheckbox = id => {
  const checkbox = document.getElementById(`${id}`)
  let ingredient = ingredientList[id]
  ingredient.hasIngredient = checkbox.checked
  return ingredientList
}

// Remove ingredient 
const removeIngredient = id => {
  const ingredientRemoveButtonEl = document.querySelector(`#removeIngredient-${id}`)

  ingredientRemoveButtonEl.parentNode.remove(ingredientRemoveButtonEl)

  delete ingredientList[id]
}

export { generateIngredientDOM, getIngredientList, toggleIngredientCheckbox, removeIngredient }