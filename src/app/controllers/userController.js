const data = require('../../../data.json')
const Chef = require("../models/Chef")
const Recipe = require("../models/Recipe")
const User = require("../models//User")

module.exports = {
  index(req, res) {
    return res.render("user/index")
  },
  about(req, res) {
    return res.render("user/about")

  },
  recipes(req, res) {

    Recipe.all(function (recipes) {
      return res.render("user/recipes", { recipes })
    })

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
  chefs(req, res) {
    User.allChefs(function (chefs) {
      return res.render('user/chefs', { chefs })
    })
  },
}
