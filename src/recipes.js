import uuidv4 from "uuid/v4"

let recipes = []

// Get recipes from module
const getRecipes = () => recipes

// Load recipes from localStorage
const loadRecipes = () => {
  const recipesJSON = localStorage.getItem("recipes")

  try {
    return recipesJSON ? JSON.parse(recipesJSON) : []
  } catch (e) {
    return []
  }
}

// Save recipe
const saveRecipes = recipe => {
  localStorage.setItem("recipes", JSON.stringify(recipes))
}

// Create recipe 
const createRecipe = () => {
  const id = uuidv4()

  recipes.push({
    id: id,
    title: "",
    instructions: "",
    ingredients: {}
  })
  saveRecipes()

  return id
}

// Update recipe
const updateRecipe = (id, updates) => {
  const recipe = recipes.find(recipe => recipe.id === id)
  if (!recipe) {
    return
  }
  if (typeof updates.title === "string") {
    recipe.title = updates.title
  }
  if (typeof updates.instructions === "string") {
    recipe.instructions = updates.instructions
  }
  if (typeof updates.ingredients === "object") {
    recipe.ingredients = updates.ingredients
  }

  saveRecipes()

  return recipe
}

// Delete recipe
const deleteRecipe = id => {
  const recipeIndex = recipes.findIndex(recipe => recipe.id === id)
  if (recipeIndex > -1) {
    recipes.splice(recipeIndex, 1)
    saveRecipes()
  }
}

recipes = loadRecipes()

export { saveRecipes, loadRecipes, getRecipes, createRecipe, updateRecipe, deleteRecipe }