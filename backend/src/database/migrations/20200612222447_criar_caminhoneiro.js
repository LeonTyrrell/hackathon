
exports.up = function(knex) {
  return knex.schema.createTable('caminhoneiro', function(table) {
      table.increments();
      table.string('nome').notNullable();
      table.string('data_nascimento').notNullable();
      table.decimal('telefone').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('caminhoneiro');
};
