const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  showIng,
  viewDish,
  showRecipe

}

function showIng(db = connection){
  return db('ing').select('id', 'name')
}



function viewDish(id, db = connection) {
  return db('ing_dish')
  .join('dishes', 'dishes.dish_id', 'ing_dish.dish_id')
  .where('ing_dish.ing_id', id)
  .select('dishes.dish_id as id', 'dishes.title as title', 'dishes.methods as methods', 'dishes.ingrediants as ing', 'dishes.img_url as img_url')
}

function showRecipe(id, db = connection) {
  return db('dishes')
  .where('dishes.dish_id', id)
  .select()
}
