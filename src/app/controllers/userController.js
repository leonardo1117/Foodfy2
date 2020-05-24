const data = require('../../../data.json')
const Chef = require("../models/Chef")
const Recipe = require("../models/Recipe")
const User = require("../models//User")

module.exports = {
  index(req, res) {
    let { filter, page, limit } = req.query

    page = page || 1
    limit = limit || 6
    let offset = limit * (page - 1)

    let params = {
      filter,
      page,
      limit,
      offset,
      callback(recipes) {
        const pagination = {
          total: Math.ceil(recipes[0].total / limit),
          page
        }

        return res.render("user/index", { filter, recipes, pagination })
      }
    }

    User.pagination(params)
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
