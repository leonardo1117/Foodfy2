const express = require('express')
const routes = express.Router()
const recipes = require('./data')




routes.get("/", function (req, res) {
  return res.render("index")
})

routes.get("/about", function (req, res) {
  return res.render("about")
})

routes.get("/recipes", function (req, res) {
  return res.render("recipes")
})

routes.get("/recepie", function (req, res) {
  const id = req.query.id

  const recipe = recipes.find(function (recipe) {
    if (recipe.id == id) {
      return true
    }
  })

  if (!recipe) {
    return res.send("Video not found!")
  }

  return res.render("recipe", { recipe })
})


module.exports = routes