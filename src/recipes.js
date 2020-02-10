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

recipes = loadRecipes()

export { saveRecipes, loadRecipes, getRecipes, createRecipe }