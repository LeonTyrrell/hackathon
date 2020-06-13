
exports.up = function(knex) {
    return knex.schema.createTable('pontodeparada', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.decimal('estacionamento').notNullable();
        table.decimal('banho').notNullable();
        table.decimal('refeicao').notNullable();
        table.decimal('seguranca').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pontodeparada');
};
