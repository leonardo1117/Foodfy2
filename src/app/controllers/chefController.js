const Chef = require('../models/Chef')

module.exports = {
  index(req, res) {

    Chef.all(function (chefs) {
      return res.render('chefs/index', { chefs })
    })

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
      return res.redirect(`/admin/chefs/${chef.id}`)
    })
  },
  show(req, res) {

    const { id } = req.params

    Chef.find(id, function (chef) {
      if (!chef) res.send('Chef not found')

      Chef.chefRecipes(id, function (recipes) {

        return res.render('chefs/show', { chef, recipes })
      })

    })

  },
  edit(req, res) {

    Chef.find(req.params.id, function (chef) {

      if (!chef) return res.send('Chef not found')

      return res.render('chefs/edit', { chef })
    })
  },
  put(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Por favor, preencha todos os campos!')
      }
    }

    Chef.update(req.body, function () {
      return res.redirect(`/admin/chefs/${req.body.id}`)
    })

  },
  delete(req, res) {

    Chef.delete(req.body.id, function () {
      return res.redirect('/admin/chefs')
    })

  },
}