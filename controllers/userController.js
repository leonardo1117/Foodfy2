const data = require('../data.json')


exports.index = function (req, res) {


  return res.render("user/index")
}

exports.about = function (req, res) {


  return res.render("user/about")
}

exports.recipes = function (req, res) {




  return res.render("user/recipes", { recipes: data.recipes })
}

exports.recipeInfo = function (req, res) {
  const id = req.query.id

  const recipe = data.find(function (recipe) {
    if (recipe.id == id) {
      return true
    }
  })

  if (!recipe) {
    return res.send("Receita não encontrada!")
  }

  return res.render("user/recipeInfo", { recipe })
}