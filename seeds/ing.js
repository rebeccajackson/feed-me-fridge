
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ing').del()
    .then(function () {
      // Inserts seed entries
      return knex('ing').insert([
        {id: 1, name: 'onion'},
        {id: 2, name: 'courgette'},
        {id: 3, name: 'chicken'}
      ]);
    });
};