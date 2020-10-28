const db = require('../../config/db')

module.exports = {
  create(data) {
    const query = `
      INSERT INTO recipe_files (
        recipe_id,
        file_id
      ) VALUES ($1, $2)
      RETURNING id
    `

    const values = [
      data.recipeId,
      data.fileId
    ]

    return db.query(query, values)
  }
}