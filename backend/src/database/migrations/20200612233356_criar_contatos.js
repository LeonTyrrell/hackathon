
exports.up = function(knex) {
    return knex.schema.createTable('contatosuteis', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.decimal('telefone').notNullable();
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contatosuteis')
};
