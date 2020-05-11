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

module.exports = routes