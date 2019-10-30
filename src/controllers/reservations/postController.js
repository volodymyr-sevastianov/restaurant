function createPostController({ repository, findFreeTables }) {
  async function postOne(req, res) {
    const reservationData = req.body.reservation;
    reservationData.reservation_start = new Date(
      reservationData.reservation_start
    );
    reservationData.reservation_end = new Date(reservationData.reservation_end);
    let freeTables;
    try {
      freeTables = await findFreeTables({
        guestsQuantity: reservationData.guests_number,
        startDate: reservationData.reservation_start,
        endDate: reservationData.reservation_end,
        repository
      });
    } catch (e) {
      res.status(404).json({ message: e.message });
      return;
    }
    reservationData.table_id = freeTables[0].id;
    const result = await repository.createOne({
      data: reservationData
    });
    res.status(200).json({ message: "SUCCESS" });
  }

  return { postOne };
}

export { createPostController };
