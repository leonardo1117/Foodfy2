const Recipe = require('../models/Recipe')
const File = require('../models/File')
const RecipeFile = require('../models/RecipeFile')


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
  async post(req, res) {

    if (req.files.length == 0) {
      return res.send('Por favor, selecione ao menos uma imagem da receita!')
    }

    const filesPromise = req.files.map(file => File.create({
      ...file
    }, (fileId) => {
      console.log(fileId)
      return fileId[0]
    }))

    await Promise.all(filesPromise)

    const recipeCreate = Recipe.create(req.body, (recipeId) => {
      console.log(recipeId)
      return recipeId[0]
    })

    const data = await {
      file_id: filesPromise,
      recipe_id: recipeCreate
    }

    console.log(data)

    await RecipeFile.create({
      data
    })

    return res.send('saved')
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

