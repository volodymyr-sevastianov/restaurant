exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("reservation").del(),
    knex("table")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("table").insert([
          { capacity: 2 },
          { capacity: 2 },
          { capacity: 4 },
          { capacity: 4 },
          { capacity: 4 },
          { capacity: 4 },
          { capacity: 6 },
          { capacity: 6 },
          { capacity: 8 },
          { capacity: 16 }
        ]);
      })
  ]);
};
