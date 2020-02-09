let recipes = []

const saveRecipe = recipe => {
  recipes.push(recipe)
  localStorage.setItem("recipes", JSON.stringify(recipes))
  return recipe
}

export { saveRecipe }