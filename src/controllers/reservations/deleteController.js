function createDeleteController({ repository }) {
  async function deleteOneById(req, res) {
    const id = req.params.reservationId;
    const result = await repository.deleteOne({ id });
    if (!result) {
      res
        .status(404)
        .json({ message: `There is no reservation with id ${id}` });
    }
    res.status(200).json(result);
  }

  return { deleteOneById };
}

export { createDeleteController };
