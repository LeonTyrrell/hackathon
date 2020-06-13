
exports.up = function(knex) {
  return knex.schema.createTable('caminhao', function(table) {
    table.increments();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    
    table.string('id_caminhoneiro').notNullable();

    table.foreign('id_caminhoneiro').references('id').inTable('caminhoneiro');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('caminhao');
};
