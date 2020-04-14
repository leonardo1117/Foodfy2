const data = require('../data')

exports.index = function (req, res) {


  return res.render('admin/index')
}

exports.create = function (req, res) {


  return res.render('admin/create')
}

exports.show = function (req, res) {


  return res.render('admin/show')
}

exports.edit = function (req, res) {


  return res.render('admin/edit')
}