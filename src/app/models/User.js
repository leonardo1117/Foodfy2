const db = require("../../config/db")

module.exports = {
  allChefs(callback) {
    db.query(`SELECT chefs.*, count(recipes) AS total_recipes
    FROM chefs
    LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
    GROUP BY chefs.id`, function (err, results) {
      if (err) throw `Database error ${err}`

      callback(results.rows)
    })
  }
}