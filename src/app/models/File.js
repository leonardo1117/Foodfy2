const db = require('../../config/db')

module.exports = {
  create(data, callback) {
    const query = `
      INSERT INTO files (
        name,
        path
      ) VALUES ($1, $2)
      RETURNING id
    `
    const values = [
      data.filename,
      data.path
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database error ${err}`

      return callback(results.rows[0].id)
    })
  }
}