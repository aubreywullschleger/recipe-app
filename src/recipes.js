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

export { saveRecipe, loadRecipes, getRecipes }