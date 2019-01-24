
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', (table) => {
        table.integer('dish_id')
        table.string('title')
        table.string('img_url')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes')
};
