const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  showIng,
  viewDish,
  showRecipe
}

function showIng(db = connection){
  return db('ing')
}

function viewDish(id, db = connection) {
  return db('ing_dish')
  .join('dishes', 'dish_id', 'ing_dish.dish_id')
  .where('ing_dish.ing_id', id)
  .select('dishes.title', 'img_url') //needs a #each dishes on handlebars
}

function showRecipe(id, db = connection) {
  return db('dishes')
  .where('dishes.id', id)
  .select()
}
