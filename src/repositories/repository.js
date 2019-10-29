function buildRepository({ knex }) {
  async function getOne({ id }) {
    const result = await knex("reservation").where({
      id
    });
    return result;
  }
  return { getOne };
}

export { buildRepository };
