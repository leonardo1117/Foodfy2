const express = require('express')
const routes = express.Router()
const recipesController = require('./recipesController')




routes.get("/", recipesController.index)
routes.get("/about", recipesController.about)
routes.get("/recipes", recipesController.recipes)
routes.get("/recipeInfo", recipesController.recipeInfo)


module.exports = routes