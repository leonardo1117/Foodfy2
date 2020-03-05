const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.set("view engine", "html")

server.use(express.static('public'))

nunjucks.configure("views", {
  express: server,
  noCache: true
})



server.get("/", function (req, res) {
  return res.render("index")
})

server.get("/about", function (req, res) {
  return res.render("about")
})

server.get("/recipes", function (req, res) {
  return res.render("recipes")
})

server.get("/recepie", function (req, res) {
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

server.listen(5000, function () {
  console.log("server is running")
})