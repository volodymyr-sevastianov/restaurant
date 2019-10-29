exports.up = function(knex) {
  return knex.schema.createTable("table", table => {
    table.increments("id");
    table.integer("capacity");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("table");
};
