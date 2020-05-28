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
  },
  filterRecipe(params) {
    const { filter, callback } = params

    let query = "",
      filterQuery = "",
      totalQuery = `SELECT recipes.*, chefs.name AS chef_name 
    FROM recipes 
    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
    `

    if (filter) {

      filterQuery = `
        WHERE recipes.title ILIKE '%${filter}%'
      `

      totalQuery = `
        SELECT recipes.*, chefs.name AS chef_name 
        FROM recipes 
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ${filterQuery}
      `
    }

    query = `
        ${totalQuery}
      `

    db.query(query, function (err, results) {
      if (err) throw `Database error ${err}`

      callback(results.rows)
    })
  }
}





