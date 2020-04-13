const data = require('./data')


exports.index = function (req, res) {


  return res.render("index")
}

exports.about = function (req, res) {


  return res.render("about")
}

exports.recipes = function (req, res) {
  return res.render("recipes")
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

  return res.render("recipeInfo", { recipe })
}