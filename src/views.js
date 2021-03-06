import { getRecipes } from "./recipes"
import { getFilters } from "./filters"
import { renderIngredients } from "./ingredients"

// Generate recipe card
const generateRecipeCardDOM = recipe => {
    // Setup recipe item
    const recipeItemEl = document.createElement("a")
    recipeItemEl.setAttribute("href", `./edit.html#${recipe.id}`)
    recipeItemEl.classList.add("recipe-item")
    
    // Setup recipe title
    const recipeTitleEl = document.createElement("h2")
    recipeTitleEl.classList.add("recipe-item__title")
    recipeTitleEl.innerHTML = recipe.title 
    recipeItemEl.appendChild(recipeTitleEl)

    // Setup recipe summary
    const recipeSummaryEl = document.createElement("p")
    recipeSummaryEl.classList.add("recipe-item__summary")

    let summaryMessage = generateSummaryMessage(recipe.ingredients)
    recipeSummaryEl.innerHTML = summaryMessage
    recipeItemEl.appendChild(recipeSummaryEl)

  return recipeItemEl
}

// Generate summary message
const generateSummaryMessage = ingredientsObject => {
  let hasIngredientCount = 0

  for (let ingredient in ingredientsObject) {
    if (Object.keys(ingredientsObject).length > 0 && ingredientsObject[`${ingredient}`].hasIngredient) {
      hasIngredientCount += 1
    }
  }

  if(hasIngredientCount === Object.keys(ingredientsObject).length && Object.keys(ingredientsObject).length > 0) {
    return "You have all the ingredients"
  } else if (hasIngredientCount < Object.keys(ingredientsObject).length && hasIngredientCount !== 0) {
    return "You have some of the ingredients"
  } else if (hasIngredientCount === 0 && Object.keys(ingredientsObject).length > 0) {
    return "You have none of the ingredients"
  } else {
    return "You have no ingredients listed for this recipe"
  }
}

// Render recipes
const renderRecipes = () => {
   // Setup recipe list
   const recipesEl = document.querySelector("#recipe-list")
   const filters = getFilters()
   const recipes = getRecipes()
   const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

   recipesEl.innerHTML = ""

   if (filteredRecipes.length > 0) {
    filteredRecipes.forEach(recipe => {
      const recipeItemEl = generateRecipeCardDOM(recipe)
      recipesEl.appendChild(recipeItemEl)
    })
  } else {
    const noRecipesMessageEl = document.createElement("h2")
    noRecipesMessageEl.innerHTML = "No recipes to show"
    recipesEl.appendChild(noRecipesMessageEl)
  }
}

// Initialize recipe edit page with values
const initializeEditPage = recipeId => {
  const titleEl = document.querySelector("#recipe-title")
  const instructionsEl = document.querySelector("#recipe-instructions")
  const ingredientsEl = document.querySelector("#ingredient-list")

  const recipes = getRecipes()
  const recipe = recipes.find(recipe => recipe.id === recipeId)
  

  titleEl.value = recipe.title
  instructionsEl.value = recipe.instructions
  ingredientsEl.value = renderIngredients(recipe)

  return recipe
}
export { renderRecipes, initializeEditPage }