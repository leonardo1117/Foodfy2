const Chef = require('../models/Chef')

module.exports = {
  index(req, res) {
    return res.render('chefs/index')
  },
  create(req, res) {
    return res.render('chefs/create')
  },
  post(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Por favor, preencha todos os campos!')
      }
    }

    Chef.create(req.body, function (chef) {
      return res.send('Dado gravado!')
    })
  },
  show(req, res) { },
  edit(req, res) {

    Chef.find(req.params.id, function (chef) {
      return res.render('chefs/edit', { chef })
    })
  },
  put(req, res) { },
  delete(req, res) { },
}