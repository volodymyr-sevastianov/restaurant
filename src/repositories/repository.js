function buildRepository({ knex }) {
  async function getOne({ id }) {
    const result = await knex("reservation").where({
      id
    });
    return result;
  }

  async function getFreeTables({ guestsQuantity, startDate, endDate }) {
    const result = await knex("reservation")
      .rightJoin("table", "reservation.table_id", "table.id")
      .where("capacity", ">=", guestsQuantity)
      .andWhere(function() {
        this.where(function() {
          this.where("reservation_start", ">", endDate).orWhere(
            "reservation_end",
            "<",
            startDate
          );
        }).orWhereNull("table_id");
      })
      .orderBy("capacity", "asc");
    return result;
  }

  async function createOne({ data }) {
    return await knex("reservation").insert(data);
  }

  async function updateOne({ id, data }) {
    return await knex("reservation")
      .where({ id })
      .update(data);
  }

  async function deleteOne({ id }) {
    return await knex("reservation")
      .where({ id })
      .del();
  }
  return {
    getOne,
    createOne,
    updateOne,
    deleteOne,
    getFreeTables
  };
}

export { buildRepository };
