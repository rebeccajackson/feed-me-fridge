const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  showIng,
  findIng,
  viewDish,
  showRecipe

}

function showIng(db = connection){
  return db('ing').select('id', 'name')
}

function findIng(ing, db = connection)
 
  //get all recipes where ing match recipe
  //need .filter
  // return array of dishes



{}

function viewDish(id, db = connection) {
  return db('ing_dish')
  .join('dishes', 'dish_id', 'ing_dish.dish_id')
  .where('ing_dish.dish_id', id)
  .select('dishes.title', 'img_url') //needs a #each dishes on handlebars
}

function showRecipe(id, db = connection) {

}
