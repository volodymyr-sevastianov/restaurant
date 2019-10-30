exports.up = function(knex) {
  return knex.schema.createTable("reservation", table => {
    table.increments("id");
    table.integer("table_id").unsigned();
    table
      .foreign("table_id")
      .references("id")
      .inTable("table")
      .onDelete("CASCADE");
    table.timestamp("reservation_start");
    table.timestamp("reservation_end");
    table.integer("guests_number");
  });
};

exports.down = async function(knex) {
  return knex.schema
    .alterTable("reservation", table => {
      table.dropForeign("table_id");
    })
    .dropTable("reservation");
};
