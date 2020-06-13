
exports.up = function(knex) {
    return knex.schema.createTable('pontodeparada', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.boolean('autoeletrica').notNullable();
        table.boolean('borracharia').notNullable();
        table.boolean('estacionamento').notNullable();
        table.boolean('banho').notNullable();
        table.boolean('refeicao').notNullable();
        table.boolean('seguranca').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pontodeparada');
};
