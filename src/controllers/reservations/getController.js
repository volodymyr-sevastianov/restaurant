function createGetController({ repository }) {
  async function getOneById(req, res) {
    const id = req.params.reservationId;
    const result = await repository.getOne({ id });
    if (!result[0]) {
      res
        .status(404)
        .json({ message: `There is no reservation with id ${id}` });
      return;
    }
    res.status(200).json(result);
  }

  return { getOneById };
}

export { createGetController };
