let recipes = JSON.parse(localStorage.getItem("recipes")) || []

// Get Recipes
const getRecipes = () => recipes

// Load recipes
const loadRecipes = () => {
  const recipes = getRecipes()
  return recipes
}

// Save recipe
const saveRecipe = recipe => {
  recipes.push(recipe)
  localStorage.setItem("recipes", JSON.stringify(recipes))
  return recipe
}

// Generate recipe card
const generateRecipeCardDOM = recipes => {
  // Setup recipe list
  const recipesEl = document.querySelector("#recipe-list")

  if (recipes.length === 0) {
    const noRecipesMessageEl = document.createElement("h2")
    noRecipesMessageEl.innerHTML = "No recipes to show"
    recipesEl.appendChild(noRecipesMessageEl)
  }

  recipes.forEach(recipe => {
    // Setup recipe item
    const recipeItemEl = document.createElement("div")
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

    recipesEl.appendChild(recipeItemEl)
  })

  return recipesEl
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

export { saveRecipe, loadRecipes, getRecipes, generateRecipeCardDOM }