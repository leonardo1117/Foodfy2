const Recipe = require('../models/Recipe')


module.exports = {
  index(req, res) {


    Recipe.all(function (recipes) {

      return res.render('recipes/index', { recipes })

    })
  },
  create(req, res) {

    Recipe.chefOptions(function (options) {
      return res.render('recipes/create', { chefOptions: options })
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


      return res.render('recipes/show', { recipe })
    })


  },
  edit(req, res) {

    Recipe.find(req.params.id, function (recipe) {
      if (!recipe) res.send('Recipe not found')


      Recipe.chefOptions(function (options) {
        return res.render('recipes/edit', { recipe, chefOptions: options })
      })

    })

  },
  put(req, res) {

    Recipe.update(req.body, function () {
      return res.redirect(`/admin/recipes/${req.body.id}`)
    })


  },
  delete(req, res) {

    Recipe.delete(req.body.id, function () {
      return res.redirect("/admin/recipes")
    })


  },
}

