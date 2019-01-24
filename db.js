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


function findIng(id, db = connection) {
  return db('ing_dish')
  .join('dishes', 'dish_id', 'ing_dish.dish_id')
  .where('ing_dish.dish_id', id)
  .select('dishes.title', 'img_url') //needs a #each dishes on handlebars
}

function showRecipe(id, db = connection) {
//when the user clicks on the link
//you link the tables with the right id
//select that id
}

