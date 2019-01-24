
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_id: 1, title: 'curry',img_url:'curry.jpg' },
        {dish_id: 2, title: 'roast',img_url:'roast.jpg' },
        {dish_id: 3, title: 'soup', img_url:'soup.jpg'},
      ]);
    });
};
