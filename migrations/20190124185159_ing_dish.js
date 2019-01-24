
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ing_dish', (table) => {
    table.increments('id')
    table.integer('dish_id')
    table.integer('ing_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ing_dish')
  
};
