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
  find(id, callback){

    db.query(`SELECT * FROM chefs WHERE id = $1`, [id], function(err, results){
      if (err) throw `Database error ${err}`

      callback(results.rows[0])
    })
  }
}