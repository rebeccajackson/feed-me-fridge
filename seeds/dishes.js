
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_id: 1, title: 'curry',img_url:'curry.jpg', ingrediants:'500g curry powder', methods:'put curry powder in warm water' },
        {dish_id: 2, title: 'roast',img_url:'roast.jpg', ingrediants:'2kg potatoes', methods:'peel potatoes' },
        {dish_id: 3, title: 'soup', img_url:'soup.jpg' , ingrediants:'500g water', methods:'put eveything in water and boil'},
      ]);
    });
};
