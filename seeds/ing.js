
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ing').del()
    .then(function () {
      // Inserts seed entries
      return knex('ing').insert([
        {id: 1, name: 'Courgette'},
        {id: 2, name: 'Onion'},
        {id: 3, name: 'Chicken'}
      ]);
    });
};