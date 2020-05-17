const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
  create(data, callback) {


    const query = `INSERT INTO recipes(
    image,
    chef_id,
    title,
    ingredients,
    preparation,
    information,
    created_at
    )VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id`

    const values = [
      data.image,
      data.chef_id,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      date(Date.now()).iso,
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database error ${err}`

      callback(results.rows[0])
    })
  },
  all(callback){
    db.query(`SELECT recipes.* FROM recipes`, function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows)
    })
  },
  find(id, callback){

    db.query(`SELECT * FROM recipes WHERE id = $1`, [id], function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows[0])
    })
  },
  findChef(id, callback){
    db.query(`SELECT * from chefs WHERE id = $1`, [id], function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows)
    })
  },
  update(data, callback){

    const query = `
    UPDATE recipes SET
    image=($1),
    chef_id=($2),
    title=($3),
    ingredients=($4),
    preparation=($5),
    information=($6)
    WHERE id = $7`


    const values = [
      data.image,
      data.chef_id,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id
    ]

    db.query(query, values, function(err, results){
      if (err) throw `Database error ${err}`

      callback()
    })

  },
  delete(id, callback){
    db.query(`DELETE FROM recipes WHERE id = $1`, [id], function(err, results){
      if (err) throw `Database error ${err}`

      return callback()
    })
  },
  chefOptions(callback){
    db.query(`SELECT name, id FROM chefs`, function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows)
    })
  },
}