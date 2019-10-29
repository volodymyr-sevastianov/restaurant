function createGetController({ repository }) {
  async function getOneById(req, res) {
    const id = req.params.reservationId;
    const result = await repository.getOne({ id });
    res.status(200).json(result);
  }

  return { getOneById };
}

export { createGetController };
