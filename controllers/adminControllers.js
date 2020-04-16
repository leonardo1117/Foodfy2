const data = require('../data')

exports.index = function (req, res) {


  return res.render('admin/index')
}

exports.create = function (req, res) {


  return res.render('admin/create')
}

exports.post = function (req, res){
  
  const keys = Object.keys(req.body)

  for(key of keys){
    if(req.body[key] == ""){
      return res.send("Por favor, preencha todos os campos para enviar a receita!")
    }
  }
}

exports.show = function (req, res) {


  return res.render('admin/show')
}

exports.edit = function (req, res) {


  return res.render('admin/edit')
}