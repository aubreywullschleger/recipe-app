import uuidv4 from "uuid/v4"

let ingredientList = {}

// Generate new ingredient element
const generateIngredientDOM = ingredient => {
  // Set up list item
  const listItem = document.createElement("div")
  listItem.classList.add("list-item")

  // Set up ingredient checkbox
  const ingredientCheckbox = document.createElement("div")
  ingredientCheckbox.classList.add("list-item__ingredient-checkbox")
  listItem.appendChild(ingredientCheckbox)

  // Set up checkbox
  const checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  checkbox.id = `${ingredient.id}`
  checkbox.name = "ingredient"
  checkbox.classList.add("list-item__checkbox")  
  ingredientCheckbox.appendChild(checkbox)

  // Set up label
  const label = document.createElement("label")
  label.setAttribute("for", `${ingredient.id}`)
  label.classList.add("list-item__label")
  label.innerHTML = ingredient.name
  ingredientCheckbox.appendChild(label)

  // Set up button
  const removeButton = document.createElement("button")
  removeButton.classList.add("list-item__button")
  removeButton.id = `removeIngredient-${ingredient.id}`
  removeButton.innerHTML = "Remove"
  listItem.appendChild(removeButton)

  return listItem
}

// Create ingredient
const createIngredient = () => {
  const ingredientNameEl = document.querySelector("#ingredient-name")
  const id = uuidv4()
  if(ingredientNameEl.value.length > 0) {
    ingredientList[id] = {
      id: id,
      name: ingredientNameEl.value,
      hasIngredient: false
    }
  }
  return ingredientList[id]
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

// Render ingredients 
const renderIngredients = recipe => {
  const ingredientListEl = document.querySelector("#ingredient-list")
  ingredientList = recipe.ingredients
  const ingredients = getIngredientList()
  
  if (Object.keys(ingredients).length === 0) {
    const noIngredientsMessageEl = document.createElement("p")
    noIngredientsMessageEl.innerHTML = "No ingredients added to recipe"
    ingredientListEl.appendChild(noIngredientsMessageEl)
  } else {
    for (let ingredient in ingredients) {
      noIngredientsMessageEl.remove()
      const ingredientItemEl = generateIngredientDOM(ingredients[ingredient])
      ingredientListEl.appendChild(ingredientItemEl)
    }
  }
}

export { generateIngredientDOM, getIngredientList, toggleIngredientCheckbox, removeIngredient, createIngredient, renderIngredients }