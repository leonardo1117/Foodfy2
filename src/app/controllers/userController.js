const data = require('../../../data.json')


exports.index = function (req, res) {


  return res.render("user/index")
}

exports.about = function (req, res) {


  return res.render("user/about")
}

exports.recipes = function (req, res) {




  return res.render("user/recipes", { recipes: data.recipes })
}

exports.show = function (req, res) {
  
  const {id} = req.params

  const foundRecipe = data.recipes.find(function (recipe){
    return recipe.id == id
  })

  if (!foundRecipe) return res.send("Recipe not found")


  const recipe = {
    ...foundRecipe
  }


  return res.render("user/show", { recipe })

}