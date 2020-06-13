
exports.up = function(knex) {
  return knex.schema.createTable('pontos_concessionaria', function(table) {
    table.increments();
    table.string('nome').notNullable();
    table.string('endereco').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pontos_concessionaria');
};
