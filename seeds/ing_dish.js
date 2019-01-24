
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ing_dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('ing_dish').insert([
        {id: 1, ing_id: 1, dish_id: 1},
        {id: 2, ing_id: 1, dish_id: 2},
        {id: 3, ing_id: 1, dish_id: 3},
        {id: 4, ing_id: 2, dish_id: 1},
        {id: 5, ing_id: 2, dish_id: 2},
        {id: 6, ing_id: 2, dish_id: 3},
        {id: 7, ing_id: 3, dish_id: 1},
        {id: 8, ing_id: 3, dish_id: 2}
      ]);
    });
};
