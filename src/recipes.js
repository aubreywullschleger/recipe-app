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

    let hasIngredientCount = 0
    let summaryMessage

    for (let ingredient in recipe.ingredients) {
      if (Object.keys(recipe.ingredients).length > 0 && recipe.ingredients[`${ingredient}`].hasIngredient) {
        hasIngredientCount += 1
      }
    }

    if(hasIngredientCount === Object.keys(recipe.ingredients).length) {
      summaryMessage = "You have all the ingredients"
    } else if (hasIngredientCount < recipe.ingredients.length) {
      summaryMessage = "You have some of the ingredients"
    } else {
      summaryMessage = "You have none of the ingredients"
    }

    recipeSummaryEl.innerHTML = summaryMessage
    recipeItemEl.appendChild(recipeSummaryEl)

    recipesEl.appendChild(recipeItemEl)
  })

  return recipesEl
}

export { saveRecipe, loadRecipes, getRecipes, generateRecipeCardDOM }