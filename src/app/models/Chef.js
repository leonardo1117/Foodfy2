const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
  create(data, callback) {


    const query = `INSERT INTO chefs(
    name,
    image,
    created_at
    )VALUES ($1, $2, $3)
    RETURNING id`

    const values = [
      data.name,
      data.image,
      date(Date.now()).iso,
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database error ${err}`

      callback(results.rows[0])
    })
  },
  all(callback){
    db.query(`SELECT chefs.* FROM chefs`, function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows)
    })
  },
  find(id, callback){

    db.query(`SELECT * FROM chefs WHERE id = $1`, [id], function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback){

    const query = `
    UPDATE chefs SET
    image=($1),
    name=($2)
    WHERE id = $3`


    const values = [
      data.image,
      data.name,
      data.id
    ]

    db.query(query, values, function(err, results){
      if (err) throw `Database error ${err}`

      callback()
    })

  },
  delete(id, callback){
    db.query(`DELETE FROM chefs where id = $1`, [id], function(err, results){
      if (err) throw `Database error ${err}`

      return callback()
    })
  }
}