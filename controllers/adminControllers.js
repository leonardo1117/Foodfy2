const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {


  return res.render('admin/index')
}

exports.create = function (req, res) {


  return res.render('admin/create')
}

exports.post = function (req, res) {

  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send('Por favor, preencha todos os campos para enviar a receita!')
    }
  }

  let id = 1
  const lastRecipe = data.recipes[data.recipes.length - 1]

  if(lastRecipe){
    id = lastRecipe.id + 1
  }

  data.recipes.push({
    id,
    ...req.body,
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file error")
  })

  return res.send("Usuário cadastrado")

}

exports.show = function (req, res) {


  return res.render('admin/show')
}

exports.edit = function (req, res) {


  return res.render('admin/edit')
}