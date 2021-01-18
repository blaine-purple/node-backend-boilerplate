
exports.up = function(knex) {
  return knex.schema
    .createTable('items', items => {
      items.increments();
      items
        .string('name', 255)
        .notNullable()
      items
        .string('link');
      items
        .text('description')
        .notNullable();
      items
        .boolean('food')
        .notNullable();
      items
        .boolean('used')
        .notNullable()
        .defaultTo(false);
      items
        .boolean('weekly')
        .notNullable()
        .defaultTo(false);
      items
        .boolean('useAgain')
        .notNullable()
        .defaultTo(true);
      items
        .integer('rating');
      items
        .integer('price');
      items
        .timestamps(); // will create two columns: created_at, updated_at
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('items')
};