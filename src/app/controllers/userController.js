const data = require('../../../data.json')

module.exports = {
  index(req, res) {
    return res.render("user/index")

  },
  about(req, res) {
    return res.render("user/about")

  },
  recipes(req, res) {
    return res.render("user/recipes", { recipes: data.recipes })

  },
  show(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
      return recipe.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found")


    const recipe = {
      ...foundRecipe
    }


    return res.render("user/show", { recipe })

  },
}
