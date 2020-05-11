const express = require('express')
const routes = express.Router()
const recipesController = require('./app/controllers/userController')
const adminController = require('./app/controllers/adminControllers')
const chefController = require('./app/controllers/chefController')


routes.get("/", recipesController.index)
routes.get("/about", recipesController.about)
routes.get("/recipes", recipesController.recipes)
routes.get("/recipes/:id", recipesController.show)


routes.get("/admin/recipes", adminController.index)
routes.get("/admin/recipes/create", adminController.create)
routes.post("/admin", adminController.post)
routes.get("/admin/recipes/:id", adminController.show)
routes.get("/admin/recipes/:id/edit", adminController.edit)
routes.put("/admin/recipes", adminController.put)
routes.delete("/admin/recipes", adminController.delete)

routes.get("/admin/chefs", chefController.index)
routes.get("/admin/chefs/create", chefController.create)
routes.post("/chefs", chefController.post)
routes.get("/admin/chefs/:id", chefController.show)
routes.get("/admin/chefs/:id/edit", chefController.edit)
routes.put("/admin/chefs", chefController.put)
routes.delete("/admin/chefs", chefController.delete)

module.exports = routes