const express = require('express')
const routes = express.Router()
const userController = require('./app/controllers/userController')
const recipeController = require('./app/controllers/recipeController')
const chefController = require('./app/controllers/chefController')


routes.get("/", userController.index)
routes.get("/about", userController.about)
routes.get("/recipes", userController.recipes)
routes.get("/recipes/:id", userController.show)
routes.get("/chefs", userController.chefs)


routes.get("/admin/recipes", recipeController.index)
routes.get("/admin/recipes/create", recipeController.create)
routes.post("/admin", recipeController.post)
routes.get("/admin/recipes/:id", recipeController.show)
routes.get("/admin/recipes/:id/edit", recipeController.edit)
routes.put("/admin/recipes", recipeController.put)
routes.delete("/admin/recipes", recipeController.delete)

routes.get("/admin/chefs", chefController.index)
routes.get("/admin/chefs/create", chefController.create)
routes.post("/chefs", chefController.post)
routes.get("/admin/chefs/:id", chefController.show)
routes.get("/admin/chefs/:id/edit", chefController.edit)
routes.put("/admin/chefs", chefController.put)
routes.delete("/admin/chefs", chefController.delete)

module.exports = routes