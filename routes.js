const express = require('express')
const routes = express.Router()
const recipesController = require('./controllers/userController')
const adminController = require('./controllers/adminControllers')



//rotas user
routes.get("/", recipesController.index)
routes.get("/about", recipesController.about)
routes.get("/recipes", recipesController.recipes)
routes.get("/recipeInfo", recipesController.recipeInfo)


// //rotas admin
routes.get("/admin/recipes", adminController.index)
routes.get("/admin/recipes/create", adminController.create)
routes.get("/admin/recipes/:id", adminController.show)
routes.get("/admin/recipes/:id/edit", adminController.edit)

module.exports = routes