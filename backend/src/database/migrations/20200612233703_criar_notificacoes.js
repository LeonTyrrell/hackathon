
exports.up = function(knex) {
  return knex.schema.createTable('notificacoes', function(table) {
    table.increments();
    table.string('categoria');
    table.string('mensagem', 4000)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('notificacoes')
};
