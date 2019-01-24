
exports.up = function(knex, Promise) {
    return knex.schema.table('dishes', (table) => {
        table.string('ingrediants')
        table.string('methods')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('dishes', (table) => {
        table.dropColumn('ingrediants');
        table.dropColumn('methods')
    }); 
};
