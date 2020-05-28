const data = require('../../../data.json')
const Chef = require("../models/Chef")
const Recipe = require("../models/Recipe")
const User = require("../models//User")

module.exports = {
  index(req, res) {

      Recipe.all(function (recipes) {
      return res.render("user/index", { recipes })
    })
    
  },
  about(req, res) {
    return res.render("user/about")

  },
  recipes(req, res) {

  

    let { filter } = req.query


    let params = {
      filter,
      callback(recipes) {
        return res.render("user/recipes", { filter, recipes, })
      }
    }

    User.filterRecipe(params)



  },
  show(req, res) {
    const { id } = req.params

    Recipe.find(id, function (recipe) {
      if (!recipe) res.send('Recipe not found')

      return res.render("user/show", { recipe })

    })


  },
  chefs(req, res) {
    User.allChefs(function (chefs) {
      return res.render('user/chefs', { chefs })
    })
  },
}
