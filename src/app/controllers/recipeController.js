const fs = require('fs')
const data = require('../../../data.json')
const Recipe = require('../models/Recipe')


module.exports = {
  index(req, res) {
    return res.render('admin/index', { recipes: data.recipes })
  },
  create(req, res) {

    Recipe.chefOptions(function (options) {
      return res.render('admin/create', { chefOptions: options })
    })
  },
  post(req, res) {

    Recipe.create(req.body, function (recipe) {

      return res.redirect("/admin/recipes")

    })
  },
  show(req, res) {

    Recipe.find(req.params.id, function (recipe) {
      if (!recipe) res.send('Recipe not found')


      return res.render('admin/show', { recipe })
    })


  },
  edit(req, res) {

    Recipe.find(req.params.id, function (recipe) {
      if (!recipe) res.send('Recipe not found')


      Recipe.chefOptions(function (options) {
        return res.render('admin/edit', { recipe, chefOptions: options })
      })

    })

  },
  put(req, res) {

    Recipe.update(req.body, function () {
      return res.redirect(`/admin/recipes/${req.body.id}`)
    })


  },
  delete(req, res) {
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function (recipe) {
      return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send('Write file error')
    })

    return res.redirect("/admin/recipes")

  },
}

