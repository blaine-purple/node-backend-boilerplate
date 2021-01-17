
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'item1', description: `description1`, food: true},
        {name: 'item2', description: `description1`, food: true},
        {name: 'item3', description: `description1`, food: true},
        {name: 'item4', description: `description1`, food: true},
        {name: 'item5', description: `description1`, food: true},
        {name: 'item6', description: `description1`, food: true},
        {name: 'item7', description: `description1`, food: false},
        {name: 'item8', description: `description1`, food: false},
        {name: 'item9', description: `description1`, food: false},
        {name: 'item10', description: `description1`, food: false},
        {name: 'item11', description: `description1`, food: false},
        {name: 'item12', description: `description1`, food: false},
        {name: 'item13', description: `description1`, food: false},

      ]);
    });
};
